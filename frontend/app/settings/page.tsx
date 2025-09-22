"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Home,
  Briefcase,
  Building,
  Settings,
  Bell,
  Shield,
  Globe,
  Save,
  ChevronLeft,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import { useState } from "react"

export default function SettingsPage() {
  const [userProfile, setUserProfile] = useState("freelancer")
  const [language, setLanguage] = useState("english")
  const [detailLevel, setDetailLevel] = useState("standard")
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    analysis: true,
    marketing: false,
  })

  const profiles = [
    {
      id: "student",
      label: "Student",
      description: "Academic contracts, internship agreements, scholarship terms",
      icon: User,
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      id: "tenant",
      label: "Tenant",
      description: "Lease agreements, rental contracts, property management documents",
      icon: Home,
      color: "bg-green-50 text-green-700 border-green-200",
    },
    {
      id: "freelancer",
      label: "Freelancer",
      description: "Client contracts, service agreements, project terms",
      icon: Briefcase,
      color: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      id: "msme",
      label: "MSME",
      description: "Business contracts, vendor agreements, partnership deals",
      icon: Building,
      color: "bg-orange-50 text-orange-700 border-orange-200",
    },
  ]

  const handleSave = () => {
    // Save settings logic here
    console.log("Settings saved")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="sm">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Settings className="h-8 w-8" />
              Profile Settings
            </h1>
            <p className="text-muted-foreground">Customize your LegalEase AI experience</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Settings */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="email" type="email" placeholder="john@example.com" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="location" placeholder="New York, NY" className="pl-10" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Profile Selection */}
            <Card>
              <CardHeader>
                <CardTitle>User Profile</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Select your primary use case for personalized analysis and recommendations
                </p>
              </CardHeader>
              <CardContent>
                <RadioGroup value={userProfile} onValueChange={setUserProfile}>
                  <div className="grid md:grid-cols-2 gap-4">
                    {profiles.map((profile) => {
                      const IconComponent = profile.icon
                      return (
                        <div key={profile.id} className="relative">
                          <RadioGroupItem value={profile.id} id={profile.id} className="peer sr-only" />
                          <Label
                            htmlFor={profile.id}
                            className={`flex flex-col p-4 rounded-lg border-2 cursor-pointer transition-all hover:bg-muted/50 peer-checked:border-primary peer-checked:bg-primary/5 ${
                              userProfile === profile.id ? "border-primary bg-primary/5" : "border-border"
                            }`}
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`p-2 rounded-lg ${profile.color}`}>
                                <IconComponent className="h-5 w-5" />
                              </div>
                              <div className="font-medium">{profile.label}</div>
                              {userProfile === profile.id && (
                                <Badge variant="default" className="ml-auto">
                                  Selected
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{profile.description}</p>
                          </Label>
                        </div>
                      )
                    })}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Personalization Options */}
            <Card>
              <CardHeader>
                <CardTitle>Personalization</CardTitle>
                <p className="text-sm text-muted-foreground">Customize how LegalEase AI presents information to you</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="language">Preferred Language</Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                      <SelectItem value="german">German</SelectItem>
                      <SelectItem value="chinese">Chinese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="detailLevel">Analysis Detail Level</Label>
                  <Select value={detailLevel} onValueChange={setDetailLevel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select detail level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic - Key points only</SelectItem>
                      <SelectItem value="standard">Standard - Balanced detail</SelectItem>
                      <SelectItem value="detailed">Detailed - Comprehensive analysis</SelectItem>
                      <SelectItem value="expert">Expert - Technical legal language</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialization">Area of Specialization (Optional)</Label>
                  <Textarea
                    id="specialization"
                    placeholder="e.g., Real estate, Employment law, Intellectual property..."
                    className="min-h-[80px]"
                  />
                  <p className="text-xs text-muted-foreground">
                    Help us provide more relevant analysis for your specific needs
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Notification Preferences */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive updates about your document analysis</p>
                  </div>
                  <Switch
                    checked={notifications.email}
                    onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, email: checked }))}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Get notified when analysis is complete</p>
                  </div>
                  <Switch
                    checked={notifications.push}
                    onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, push: checked }))}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Analysis Updates</Label>
                    <p className="text-sm text-muted-foreground">Weekly summaries of your document insights</p>
                  </div>
                  <Switch
                    checked={notifications.analysis}
                    onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, analysis: checked }))}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Marketing Communications</Label>
                    <p className="text-sm text-muted-foreground">Product updates and legal insights</p>
                  </div>
                  <Switch
                    checked={notifications.marketing}
                    onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, marketing: checked }))}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Account Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Account Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-sm text-muted-foreground">Freelancer</p>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Documents Analyzed</span>
                    <span className="font-medium">142</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Risks Identified</span>
                    <span className="font-medium">23</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Time Saved</span>
                    <span className="font-medium">47 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Globe className="h-4 w-4 mr-2" />
                  Change Language
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Shield className="h-4 w-4 mr-2" />
                  Privacy Settings
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Bell className="h-4 w-4 mr-2" />
                  Notification Center
                </Button>
              </CardContent>
            </Card>

            {/* Save Button */}
            <Button onClick={handleSave} className="w-full" size="lg">
              <Save className="h-4 w-4 mr-2" />
              Save Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
