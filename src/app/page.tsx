'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX, Download, Smartphone, Clock, Zap, Apple, ComputerIcon as Windows, LaptopIcon as Linux, Speaker, Settings, PartyPopper, UserPlus, Github, Star } from 'lucide-react'
import Link from 'next/link'
import { LiveDemo } from '@/components/live-demo'

export default function VineBoomerLanding() {
  const [muted, setMuted] = useState(false)
  const [lastBoomTime, setLastBoomTime] = useState(0)
  const downloadRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    const boomInterval = setInterval(() => {
      if (!muted && Date.now() - lastBoomTime > 5000) {
        playVineBoom()
        setLastBoomTime(Date.now())
      }
    }, 1000)

    return () => clearInterval(boomInterval)
  }, [muted, lastBoomTime])

  const playVineBoom = () => {
    const audio = new Audio('assets/audio/vine-boom.mp3')
    audio.volume = 0.3 // Reduced volume for background effect
    audio.play()
  }

  const starCount = 1

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 text-white overflow-hidden relative">
      {/* Floating Vine leaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <img
            key={i}
            src="/assets/img/logo.png"
            alt=""
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              opacity: 0.2,
              transform: `rotate(${Math.random() * 360}deg)`,
              width: `${Math.random() * 30 + 20}px`
            }}
          />
        ))}
      </div>

      <main className="container mx-auto px-4 py-16 relative z-10">
        <nav className="flex justify-between items-center mb-16">
          <h1 className="text-4xl font-bold">Vine Boomer</h1>
          <div className="flex flex-wrap gap-4">
          <Button
              size="icon"
              variant="outline"
              onClick={() => setMuted(!muted)}
              className="rounded-full bg-white/20 hover:bg-white/30"
            >
              {muted ? <VolumeX /> : <Volume2 />}
            </Button>
            <Button 
              variant="outline"
              className="bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              <UserPlus className="mr-2" /> Login / Signup
            </Button>
          </div>
        </nav>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-bold mb-6">Random. Loud. Hilarious. Welcome to Vine Boomer!</h2>
            <p className="text-xl mb-8">The best App for random Vine Booms (and the only one). Set your intervals, and get boomed!  Perfect for pranks, parties, or just surprising yourself!</p>
            <div className="flex flex-wrap gap-4">

            <Button 
              onClick={() => downloadRef.current?.scrollIntoView({ behavior: 'smooth' })}
              size="lg" 
              className="bg-white text-pink-600 hover:bg-pink-100 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:rotate-3"
            >
              <Download className="mr-2" /> Download Now
            </Button>
            <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:rotate-3 flex items-center"
              >
                <Github className="mr-2" />
                Star on GitHub
                {starCount !== null && (
                  <span className="ml-2 bg-white text-black rounded-full px-2 py-1 text-xs font-bold flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    {starCount.toLocaleString()}
                  </span>
                )}
              </Button>
              </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <LiveDemo />
            </div>
            <div className="absolute -top-4 -left-4 bg-yellow-300 text-pink-600 rounded-full p-2 animate-bounce">
              <Zap size={24} />
            </div>
          </div>
        </div>

        <section className="mt-24">
          <h3 className="text-3xl font-bold mb-12 text-center">Why You'll Love Vine Boomer</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
                { 
                  icon: <Speaker size={48} />, 
                  title: "Endless Vine Booms", 
                  description: "Plays the Vine Boom sound effect at random intervals." 
                },
                { 
                  icon: <Settings size={48} />, 
                  title: "Fully Configurable", 
                  description: "Adjust timing and randomness to create the perfect boom experience." 
                },
                { 
                  icon: <PartyPopper size={48} />, 
                  title: "Perfect for Jumpscares", 
                  description: "I promise you will be scared everytime! " 
                }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-300 transform hover:scale-105 hover:-rotate-3">
                <div className="text-yellow-300 mb-4 flex justify-center">{feature.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>



        <section className="mt-24">
          <h3 className="text-3xl font-bold mb-12 text-center">Download Vine Boomer</h3>
          <div id="download" ref={downloadRef} className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center  ">
              <Windows size={48} className="mx-auto mb-4 text-blue-300" />
              <h4 className="text-xl font-semibold mb-2">Windows</h4>
              <p className="text-white/80 mb-4">Ready to boom on your PC? Download now and start Vine booming!</p>
              <ul className="text-sm text-white/70 mb-4 text-left">
                <li>• Windows 10 or later</li>
                <li>• 3mb RAM minimum</li>
                <li>• 10MB free space</li>
              </ul>
              <Link href={"https://github.com/die-vollidioten/vine-boomer/tags"} target='_blank'>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300  transform hover:scale-110 hover:rotate-3 ">
                Download for Windows
              </Button>
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-300 transform hover:scale-105">
              <Apple size={48} className="mx-auto mb-4 text-gray-300" />
              <h4 className="text-xl font-semibold mb-2">macOS</h4>
              <p className="text-white/80 mb-4">Boom on your Mac soon! We're working hard to bring you the macOS version.</p>
              <ul className="text-sm text-white/70 mb-4 text-left">
                <li>• macOS 11 Big Sur or later</li>
                <li>• 3mb RAM minimum</li>
                <li>• 10MB free space</li>
              </ul>
              <Button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out opacity-50 cursor-not-allowed" disabled>
                Coming Soon
              </Button>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-300 transform hover:scale-105">
              <Linux size={48} className="mx-auto mb-4 text-yellow-300" />
              <h4 className="text-xl font-semibold mb-2">Linux</h4>
              <p className="text-white/80 mb-4">Linux lovers, we have forgotten you! Vine Boomer isn't coming to your favorite OS.</p>
              <ul className="text-sm text-white/70 mb-4 text-left">
                <li>• Ubuntu 20.04 or equivalent</li>
                <li>• 57GB RAM minimum</li>
                <li>• 106GB free space</li>
              </ul>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out opacity-50 cursor-not-allowed" disabled>
                Coming never
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
  