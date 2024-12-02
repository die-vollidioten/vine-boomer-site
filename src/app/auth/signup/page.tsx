'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UserPlus, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function SignUpPage() {
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
            <div className="space-y-2">
              <label className="text-white/90 block text-sm" htmlFor="confirm-password">
                Confirm Password
              </label>
              <Input 
                id="confirm-password" 
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
              {isLoading ? 'Signing up...' : (
                <>
                  <UserPlus className="mr-2 h-4 w-4" /> Sign Up
                </>
              )}
            </Button>
          </form>
        </div>
        <div className="text-center space-y-4">
          <Link 
            href="/auth" 
            className="text-white inline-flex items-center hover:opacity-90 transition-opacity"
          >
            Already have an account? Login
          </Link>
          <Link 
            href="/" 
            className="text-white inline-flex items-center hover:opacity-90 transition-opacity block"
          >
            <ArrowRight className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
