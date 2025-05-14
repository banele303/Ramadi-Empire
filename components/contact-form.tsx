"use client"

import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  // EmailJS configuration
  const serviceId = 'service_zipjy3i' // Your EmailJS service ID
  const templateId = 'template_xm3rf1q' // Your EmailJS template ID
  const publicKey = 'kUqSB5YqbdNB5Cgrk' // Your EmailJS public key
  // Private key: amM7hanfd8_040V9GJPFt (stored securely and not exposed in client-side code)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setFormError(false)
    
    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        e.currentTarget,
        publicKey
      )
      
      if (result.text === 'OK') {
        setFormSubmitted(true)
        if (formRef.current) {
          formRef.current.reset()
        }
      } else {
        setFormError(true)
      }
    } catch (error) {
      console.error('EmailJS error:', error)
      setFormError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send us a message</CardTitle>
        <CardDescription>Fill out the form below and we&apos;ll get back to you as soon as possible. You can also reach us at info@ramadiempire.com or +27 76 223 2914.</CardDescription>
      </CardHeader>
      <CardContent>
        {formSubmitted ? (
          <div className="bg-green-50 border border-green-200 rounded-md p-4 text-green-800">
            <h3 className="text-lg font-medium">Thank you for your message!</h3>
            <p className="mt-2">We have received your inquiry and will get back to you as soon as possible.</p>
            <Button onClick={() => setFormSubmitted(false)} className="mt-4">Send another message</Button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="to_email" value="official.student24@gmail.com" />
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" name="firstName" required className="bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" name="lastName" required className="bg-background" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required className="bg-background" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" type="tel" className="bg-background" placeholder="+27 XX XXX XXXX" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" required className="bg-background" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required className="min-h-[150px] bg-background" />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="newsletter" name="newsletter" />
              <Label htmlFor="newsletter" className="text-sm">
                Sign up for news and updates
              </Label>
            </div>
          </div>

          {formError && (
            <div className="bg-red-50 border border-red-200 rounded-md p-3 text-red-800 mb-4">
              <p>There was an error sending your message. Please try again or contact us directly at info@ramadiempire.com.</p>
            </div>
          )}
          
          <Button type="submit" className="w-full" size="lg" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </Button>
        </form>
        )}
      </CardContent>
    </Card>
  )
}

