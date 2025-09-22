"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Upload, FileText, CheckCircle, ArrowRight, User, Home, Briefcase, Building } from "lucide-react"
import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [userProfile, setUserProfile] = useState<string>("")
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [isDragOver, setIsDragOver] = useState(false)
  const router = useRouter()

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)

    const files = e.dataTransfer.files
    if (files.length > 0 && files[0].type === "application/pdf") {
      setSelectedFile(files[0])
    }
  }, [])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      setSelectedFile(files[0])
    }
  }

  const handleAnalyze = async () => {
    if (!selectedFile || !userProfile) return

    setIsUploading(true)

    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      setUploadProgress(i)
      await new Promise((resolve) => setTimeout(resolve, 200))
    }

    router.push("/analysis?file=" + selectedFile.name + "&profile=" + userProfile)
  }

  const profiles = [
    {
      id: "student",
      label: "Student",
      description: "Academic contracts, internship agreements",
      icon: User,
    },
    {
      id: "tenant",
      label: "Tenant",
      description: "Lease agreements, rental contracts",
      icon: Home,
    },
    {
      id: "freelancer",
      label: "Freelancer",
      description: "Client contracts, service agreements",
      icon: Briefcase,
    },
    {
      id: "msme",
      label: "MSME",
      description: "Business contracts, vendor agreements",
      icon: Building,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Upload Your Legal Document</h1>
          <p className="text-xl text-muted-foreground">
            Get AI-powered analysis and plain English explanations in minutes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* File Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Document Upload
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  isDragOver
                    ? "border-primary bg-primary/5"
                    : selectedFile
                      ? "border-success bg-success/5"
                      : "border-muted-foreground/25 hover:border-primary/50"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {selectedFile ? (
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-3 rounded-full bg-success/10">
                      <CheckCircle className="h-8 w-8 text-success" />
                    </div>
                    <div>
                      <p className="font-medium text-success">{selectedFile.name}</p>
                      <p className="text-sm text-muted-foreground">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => setSelectedFile(null)}>
                      Remove File
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-4 rounded-full bg-primary/10">
                      <Upload className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-medium mb-2">Drag & Drop Your PDF Here</p>
                      <p className="text-muted-foreground mb-4">or click to browse files</p>
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileSelect}
                        className="hidden"
                        id="file-upload"
                      />
                      <Label htmlFor="file-upload">
                        <Button variant="outline" className="cursor-pointer bg-transparent">
                          Browse Files
                        </Button>
                      </Label>
                    </div>
                  </div>
                )}
              </div>

              {isUploading && (
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Uploading...</span>
                    <span className="text-sm text-muted-foreground">{uploadProgress}%</span>
                  </div>
                  <Progress value={uploadProgress} className="h-2" />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Profile Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Select Your Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Choose your profile for personalized analysis and recommendations
              </p>

              <RadioGroup value={userProfile} onValueChange={setUserProfile}>
                <div className="space-y-4">
                  {profiles.map((profile) => {
                    const IconComponent = profile.icon
                    return (
                      <div key={profile.id} className="flex items-start space-x-3">
                        <RadioGroupItem value={profile.id} id={profile.id} className="mt-1" />
                        <Label htmlFor={profile.id} className="flex-1 cursor-pointer">
                          <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-muted">
                              <IconComponent className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="font-medium">{profile.label}</div>
                              <div className="text-sm text-muted-foreground">{profile.description}</div>
                            </div>
                          </div>
                        </Label>
                      </div>
                    )
                  })}
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>

        {/* Action Button */}
        <div className="text-center mt-8">
          <Button
            size="lg"
            className="px-8"
            disabled={!selectedFile || !userProfile || isUploading}
            onClick={handleAnalyze}
          >
            {isUploading ? (
              "Analyzing Document..."
            ) : (
              <>
                Analyze Document
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>

          {(!selectedFile || !userProfile) && (
            <p className="text-sm text-muted-foreground mt-2">
              Please upload a PDF and select your profile to continue
            </p>
          )}
        </div>

        {/* Features Preview */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="text-center p-6">
            <CardContent className="p-0">
              <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Plain English Summary</h3>
              <p className="text-sm text-muted-foreground">Get clear explanations of complex legal terms</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="p-0">
              <div className="p-3 rounded-full bg-destructive/10 w-fit mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="font-semibold mb-2">Risk Assessment</h3>
              <p className="text-sm text-muted-foreground">Identify potentially problematic clauses</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="p-0">
              <div className="p-3 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                <ArrowRight className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Interactive Analysis</h3>
              <p className="text-sm text-muted-foreground">Ask questions about your document</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
