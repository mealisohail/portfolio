"use client";

import { RepeatIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Noto_Nastaliq_Urdu, Tiro_Devanagari_Marathi } from "next/font/google";
import Image from "next/image";
import React, { useCallback, useState } from "react";

import { Button } from "@/components/ui/button";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/cn";
import {
  AppleHelloEnglishEffect,
  AppleHelloHindiEffect,
} from "@/registry/apple-hello-effect";

const fontMarathi = Tiro_Devanagari_Marathi({
  weight: "400",
  subsets: ["devanagari"],
  display: "swap",
  preload: false,
});

const fontUrdu = Noto_Nastaliq_Urdu({
  weight: "500",
  subsets: ["arabic"],
  display: "swap",
  preload: false,
});

const layers = ["hhello", "hello", "marathi", "urdu", "ali-wordmark"] as const;

/** Greetings without a hand-drawn path: a soft blur-fade, held briefly. */
function FadeGreeting({
  children,
  className,
  onDone,
  ...props
}: React.ComponentProps<typeof motion.span> & { onDone: () => void }) {
  return (
    <motion.span
      className={cn("block whitespace-nowrap select-none", className)}
      initial={{ opacity: 0, filter: "blur(6px)", y: 4 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      exit={{ opacity: 0, filter: "blur(4px)", transition: { duration: 0.4 } }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      onAnimationComplete={() => setTimeout(onDone, 1100)}
      {...props}
    >
      {children}
    </motion.span>
  );
}

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
            "h-10 sm:h-16": ["hhello", "hello", "marathi", "urdu"].includes(
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

          {layers[currentIndex] === "marathi" && (
            <FadeGreeting
              lang="mr"
              className={cn(fontMarathi.className, "text-4xl sm:text-6xl")}
              onDone={nextAnimation}
            >
              नमस्कार
            </FadeGreeting>
          )}

          {layers[currentIndex] === "urdu" && (
            <FadeGreeting
              lang="ur"
              dir="rtl"
              className={cn(
                fontUrdu.className,
                "-translate-y-1.5 text-3xl leading-[1.9] sm:-translate-y-3 sm:text-5xl sm:leading-[1.9]"
              )}
              onDone={nextAnimation}
            >
              السلام علیکم
            </FadeGreeting>
          )}

          {layers[currentIndex] === "ali-wordmark" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/cover.png"
                alt="cover"
                width={380}
                height={200}
                className="hidden h-16 sm:h-20 [html.dark_&]:block"
              />
              <Image
                src="/images/cover2.png"
                alt="cover"
                width={380}
                height={200}
                className="hidden h-16 sm:h-20 [html.light_&]:block"
              />
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
