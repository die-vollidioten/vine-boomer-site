'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LogIn, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF7248] via-[#FF5449] to-[#FF4D6B] flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 h-12 bg-white/20 rounded-xl p-1">
            <TabsTrigger 
              value="login" 
              className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-black text-white"
            >
              Login
            </TabsTrigger>
            <TabsTrigger 
              value="signup"
              className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-black text-white"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <div className="bg-[#FF5449]/30 backdrop-blur-xl rounded-3xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-white/90 block text-sm" htmlFor="email">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    placeholder="boom@example.com" 
                    required 
                    type="email"
                    className="bg-transparent border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white/90 block text-sm" htmlFor="password">
                    Password
                  </label>
                  <Input 
                    id="password" 
                    required 
                    type="password"
                    className="bg-transparent border-white/20 text-white"
                  />
                </div>
                <Link 
                  href="/auth/reset-password" 
                  className="text-white/90 text-sm hover:text-white transition-colors inline-block"
                >
                  Forgot password?
                </Link>
                <Button 
                  type="submit" 
                  className="w-full bg-black hover:bg-black/90 text-white h-11" 
                  disabled={isLoading}
                >
                  <LogIn className="mr-2 h-4 w-4" /> Login
                </Button>
              </form>
            </div>
          </TabsContent>
          <TabsContent value="signup">
            <div className="bg-[#FF5449]/30 backdrop-blur-xl rounded-3xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-white/90 block text-sm" htmlFor="signup-email">
                    Email
                  </label>
                  <Input 
                    id="signup-email" 
                    placeholder="boom@example.com" 
                    required 
                    type="email"
                    className="bg-transparent border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white/90 block text-sm" htmlFor="signup-password">
                    Password
                  </label>
                  <Input 
                    id="signup-password" 
                    required 
                    type="password"
                    className="bg-transparent border-white/20 text-white"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-black hover:bg-black/90 text-white h-11" 
                  disabled={isLoading}
                >
                  Sign Up
                </Button>
              </form>
            </div>
          </TabsContent>
        </Tabs>
        <div className="text-center">
          <Link 
            href="/" 
            className="text-white inline-flex items-center hover:opacity-90 transition-opacity"
          >
            <ArrowRight className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

