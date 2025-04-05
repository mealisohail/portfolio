"use client";

import { RepeatIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useCallback, useState } from "react";

import { Button } from "@/components/ui/button";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/cn";
import {
  AppleHelloEnglishEffect,
  AppleHelloHindiEffect,
} from "@/registry/apple-hello-effect";
import Image from "next/image";

const layers = ["hhello", "hello", "ali-wordmark"] as const;

export function Hello() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const canRestart = currentIndex === layers.length - 1;

  const nextAnimation = useCallback(() => {
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % layers.length);
    }, 500);
  }, []);

  return (
    <>
      <div
        className={cn(
          "absolute top-1/2 h-16 w-full -translate-y-1/2 border-y border-grid transition-all duration-500 sm:h-20",
          {
            "h-10 sm:h-16": ["hhello", "hello"].includes(
              layers[currentIndex]
            ),
          }
        )}
      />

      <AnimatePresence mode="wait">
        <div
          key={`layer-${currentIndex}`}
          className="relative flex items-center justify-center text-black dark:text-white"
        >
          <motion.div
            className="h-full w-px bg-grid"
            layoutId="layout-grid-left"
            transition={{
              duration: 0.5,
            }}
          />

          {layers[currentIndex] === "hhello" && (
            <AppleHelloHindiEffect
              className="h-10 sm:h-16"
              exit={{ opacity: 0, scale: 0.8 }}
              onAnimationComplete={nextAnimation}
            />
          )}

          {layers[currentIndex] === "hello" && (
            <AppleHelloEnglishEffect
              className="h-10 sm:h-16"
              exit={{ opacity: 0, scale: 0.8 }}
              onAnimationComplete={nextAnimation}
            />
          )}

          {layers[currentIndex] === "ali-wordmark" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <Image src='/images/cover.png' alt="cover"   width={380} height={200}  className="h-16 sm:h-20 hidden [html.dark_&]:block" />
              <Image src='/images/cover2.png' alt="cover"   width={380} height={200}  className="h-16 sm:h-20 hidden [html.light_&]:block" />
            </motion.div>
          )}     

          <motion.div
            className="h-full w-px bg-grid"
            layoutId="layout-grid-right"
            transition={{
              duration: 0.5,
            }}
          />
        </div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-end justify-end">
        <SimpleTooltip content="Restart animation">
          <Button
            className="translate-px"
            variant="outline"
            size="icon"
            disabled={!canRestart}
            onClick={() => {
              setCurrentIndex(0);
            }}
          >
            <RepeatIcon />
          </Button>
        </SimpleTooltip>
      </div>
    </>
  );
}
