"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const AVAILABLE_TIMES = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00"]

const TIMEZONES = [
  { value: "Africa/Johannesburg", label: "Johannesburg (GMT+02:00)" },
  { value: "UTC", label: "UTC" },
]

export function BookingSection() {
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState<string>()
  const [timezone, setTimezone] = useState("Africa/Johannesburg")

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Book an appointment</h2>
            <p className="text-muted-foreground">
              Schedule a consultation with our experts to discuss your project requirements
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Consultation with Mukondi Ramadi</CardTitle>
              <CardDescription>50 minutes @ ZAR 45.00</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label>Select Date</Label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border mx-auto"
                  disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                />
              </div>

              {date && (
                <div className="space-y-4 animate-in fade-in-50">
                  <Label>Time Zone</Label>
                  <Select value={timezone} onValueChange={setTimezone}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time zone" />
                    </SelectTrigger>
                    <SelectContent>
                      {TIMEZONES.map((tz) => (
                        <SelectItem key={tz.value} value={tz.value}>
                          {tz.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {date && timezone && (
                <div className="space-y-4 animate-in fade-in-50">
                  <Label>Available Times ({format(date, "MMMM d, yyyy")})</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {AVAILABLE_TIMES.map((t) => (
                      <Button
                        key={t}
                        variant={time === t ? "default" : "outline"}
                        className="w-full"
                        onClick={() => setTime(t)}
                      >
                        {t}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {date && time && timezone && (
                <div className="pt-4 animate-in fade-in-50">
                  <Button className="w-full" size="lg">
                    Confirm Booking for {format(date, "MMM d")} at {time}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

