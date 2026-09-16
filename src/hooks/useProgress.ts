"use client";

import { useCallback, useEffect, useState } from "react";
import type { ProgressState } from "@/lib/types";
import {
  PROGRESS_EVENT,
  PROGRESS_STORAGE_KEY,
  emptyProgress,
  readProgress,
  resetProgress as resetProgressStorage,
  setCheckpointCompleted,
  setLastLesson,
  setLessonCompleted,
} from "@/lib/progress";

/**
 * Hook central de progresso.
 *
 * `hydrated` começa em `false` e vira `true` depois do primeiro efeito no
 * navegador. Use-o para não renderizar números diferentes no servidor e no
 * cliente (evita erro de hidratação do React).
 */
export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(emptyProgress);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setProgress(readProgress());
    setHydrated(true);

    const handleLocal = (event: Event) => {
      const detail = (event as CustomEvent<ProgressState>).detail;
      setProgress(detail ?? readProgress());
    };

    // Sincroniza entre abas abertas do mesmo navegador.
    const handleStorage = (event: StorageEvent) => {
      if (event.key === PROGRESS_STORAGE_KEY || event.key === null) {
        setProgress(readProgress());
      }
    };

    window.addEventListener(PROGRESS_EVENT, handleLocal);
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener(PROGRESS_EVENT, handleLocal);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const completeLesson = useCallback((id: string, done: boolean) => {
    setProgress(setLessonCompleted(id, done));
  }, []);

  const completeCheckpoint = useCallback((id: string, done: boolean) => {
    setProgress(setCheckpointCompleted(id, done));
  }, []);

  const registerVisit = useCallback((id: string) => {
    setProgress(setLastLesson(id));
  }, []);

  const reset = useCallback(() => {
    setProgress(resetProgressStorage());
  }, []);

  return {
    progress,
    hydrated,
    completeLesson,
    completeCheckpoint,
    registerVisit,
    reset,
  };
}
