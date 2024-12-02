'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export function LiveDemo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [interval, setInterval] = useState([30])
  const [lastBoom, setLastBoom] = useState(0)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isPlaying) {
      timer = setInterval(() => {
        const now = Date.now()
        if (now - lastBoom >= interval[0] * 1000) {
          playVineBoom()
          setLastBoom(now)
        }
      }, 1000)
    }

    return () => clearInterval(timer)
  }, [isPlaying, interval, lastBoom])

  const playVineBoom = () => {
    const audio = new Audio('/vine-boom.mp3')
    audio.play()
  }

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
      <h3 className="text-2xl font-semibold mb-4">Try Vine Boomer Live!</h3>
      <div className="flex items-center justify-between gap-4 mb-6">
        <span className="text-lg">Interval:</span>
        <Slider
          value={interval}
          onValueChange={setInterval}
          max={60}
          min={1}
          step={1}
          className="w-64"
        />
        <span className="text-lg">{interval}s</span>
      </div>
      <Button 
        onClick={() => setIsPlaying(!isPlaying)}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
      >
        {isPlaying ? 'Stop Booming' : 'Start Booming'}
      </Button>
      <div className="mt-4 text-lg">
        {isPlaying ? (
          <p>Booming every {interval} seconds!</p>
        ) : (
          <p>Press Start to begin the nostalgia trip!</p>
        )}
      </div>
    </div>
  )
}

