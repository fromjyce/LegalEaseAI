import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, FileText, Shield, MessageSquare, BarChart3, ArrowRight, Scale } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Shield className="h-4 w-4" />
              AI-Powered Legal Analysis
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Google Translate for <span className="text-primary">Legal Docs</span> + Risk Radar
          </h1>

          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Transform complex legal documents into plain English with AI-powered analysis, risk assessment, and
            interactive guidance for non-lawyers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/upload">
              <Button size="lg" className="text-lg px-8">
                <Upload className="mr-2 h-5 w-5" />
                Upload Document to Start
              </Button>
            </Link>
            <Link href="/analysis">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                View Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Upload Area Preview */}
          <Link href="/upload">
            <Card className="max-w-2xl mx-auto border-2 border-dashed border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
              <CardContent className="p-12">
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-medium mb-2">Drag & Drop Your PDF Here</p>
                    <p className="text-muted-foreground">or click to browse files</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Understand Legal Documents</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI breaks down complex legal language into clear, actionable insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Plain English Summary</h3>
                <p className="text-sm text-muted-foreground">
                  Get clear explanations of what your document actually means
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="p-3 rounded-full bg-destructive/10 w-fit mx-auto mb-4">
                  <Shield className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-semibold mb-2">Risk Heatmap</h3>
                <p className="text-sm text-muted-foreground">
                  Visual highlights show risky clauses with severity indicators
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="p-3 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">AI Chatbot</h3>
                <p className="text-sm text-muted-foreground">
                  Ask questions and get instant answers about your document
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="p-3 rounded-full bg-chart-2/10 w-fit mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-chart-2" />
                </div>
                <h3 className="font-semibold mb-2">Visual Dashboard</h3>
                <p className="text-sm text-muted-foreground">
                  Charts and insights to understand document risks at a glance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* User Profiles Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored for Your Needs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your profile for personalized analysis and recommendations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Student", desc: "Academic contracts, internship agreements", icon: "🎓" },
              { title: "Tenant", desc: "Lease agreements, rental contracts", icon: "🏠" },
              { title: "Freelancer", desc: "Client contracts, service agreements", icon: "💼" },
              { title: "MSME", desc: "Business contracts, vendor agreements", icon: "🏢" },
            ].map((profile, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0 text-center">
                  <div className="text-4xl mb-4">{profile.icon}</div>
                  <h3 className="font-semibold mb-2">{profile.title}</h3>
                  <p className="text-sm text-muted-foreground">{profile.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Understand Your Legal Documents?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust LegalEase AI to simplify their legal documents
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            <Upload className="mr-2 h-5 w-5" />
            Upload Your First Document
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Scale className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">LegalEase AI</span>
          </div>
          <p className="text-muted-foreground">Making legal documents accessible to everyone</p>
        </div>
      </footer>
    </div>
  )
}
