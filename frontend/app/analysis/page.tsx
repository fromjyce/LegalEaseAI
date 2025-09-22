"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  FileText,
  AlertTriangle,
  MessageSquare,
  Send,
  Download,
  Share2,
  ChevronLeft,
  Shield,
  CheckCircle,
  XCircle,
} from "lucide-react"
import { useState } from "react"

export default function AnalysisPage() {
  const [chatMessage, setChatMessage] = useState("")
  const [chatHistory, setChatHistory] = useState([
    {
      type: "ai",
      message:
        "Hi! I've analyzed your Service Agreement. I found 3 risk areas including an unlimited liability clause. Feel free to ask me any questions about the contract terms, risks, or anything else you'd like to understand better.",
    },
  ])

  const demoResponses = [
    "Based on Section 4.2, the unlimited liability clause means you could be responsible for any damages without a cap. I'd recommend negotiating a liability limit, perhaps $50,000 or 2x the contract value.",
    "The automatic renewal clause in Section 7.1 requires 60 days notice to cancel. I suggest setting a calendar reminder for 90 days before renewal to give yourself time to decide.",
    "The late payment fee of 1.5% per month is actually quite reasonable - many contracts charge 2-3%. Just make sure to pay invoices within 30 days to avoid these fees.",
    "The intellectual property clause is favorable to you - you'll own all work once payment is complete. This is standard and protects your interests.",
    "For a freelancer like yourself, I'd also recommend adding a clause about scope changes and how additional work will be billed to prevent scope creep.",
  ]

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return

    const randomResponse = demoResponses[Math.floor(Math.random() * demoResponses.length)]

    setChatHistory((prev) => [
      ...prev,
      { type: "user", message: chatMessage },
      {
        type: "ai",
        message: randomResponse,
      },
    ])
    setChatMessage("")
  }

  const riskItems = [
    {
      severity: "high",
      title: "Unlimited Liability Clause",
      description:
        "Section 4.2 contains unlimited liability terms that could expose you to significant financial risk. This means you could be responsible for damages far exceeding the contract value.",
      location: "Page 2, Section 4.2",
      recommendation: "Negotiate a liability cap of $50,000 or 2x contract value",
    },
    {
      severity: "medium",
      title: "Automatic Renewal Terms",
      description:
        "Contract automatically renews unless cancelled 60 days in advance. Missing this deadline means you're locked in for another year.",
      location: "Page 3, Section 7.1",
      recommendation: "Set calendar reminder 90 days before renewal date",
    },
    {
      severity: "low",
      title: "Late Payment Fees",
      description:
        "Standard late payment penalty of 1.5% per month. This is reasonable compared to industry standards.",
      location: "Page 1, Section 2.3",
      recommendation: "Ensure timely payment within 30-day terms",
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "destructive"
      case "medium":
        return "warning"
      case "low":
        return "success"
      default:
        return "secondary"
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high":
        return <XCircle className="h-4 w-4" />
      case "medium":
        return <AlertTriangle className="h-4 w-4" />
      case "low":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <Shield className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back to Upload
              </Button>
              <div>
                <h1 className="text-xl font-semibold">Service Agreement Analysis</h1>
                <p className="text-sm text-muted-foreground">contract.pdf • 2.4 MB • Analyzed 2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-140px)]">
        {/* Left Panel - PDF Viewer */}
        <div className="w-1/2 border-r bg-muted/20">
          <div className="p-4 border-b">
            <h2 className="font-semibold flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Document with Risk Highlights
            </h2>
          </div>
          <ScrollArea className="h-full p-4">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                {/* Simulated PDF content with risk highlights */}
                <div className="space-y-4 text-sm">
                  <div className="text-center font-bold text-lg mb-6">SERVICE AGREEMENT</div>

                  <div className="space-y-3">
                    <p>
                      <strong>1. SCOPE OF SERVICES</strong>
                    </p>
                    <p>The Service Provider agrees to provide web development services as outlined in Exhibit A.</p>

                    <p>
                      <strong>2. PAYMENT TERMS</strong>
                    </p>
                    <p>
                      Payment is due within 30 days of invoice date.{" "}
                      <span className="bg-success/20 px-1 rounded">Late payment fees of 1.5% per month apply.</span>
                    </p>

                    <p>
                      <strong>3. INTELLECTUAL PROPERTY</strong>
                    </p>
                    <p>All work product shall remain the property of the Client upon full payment.</p>

                    <p>
                      <strong>4. LIABILITY</strong>
                    </p>
                    <p>
                      <span className="bg-destructive/20 px-1 rounded font-medium">
                        4.2 The Service Provider shall be liable for any and all damages, losses, or expenses arising
                        from or related to the services provided, without limitation.
                      </span>
                    </p>

                    <p>
                      <strong>5. CONFIDENTIALITY</strong>
                    </p>
                    <p>Both parties agree to maintain confidentiality of proprietary information.</p>

                    <p>
                      <strong>6. TERMINATION</strong>
                    </p>
                    <p>Either party may terminate this agreement with 30 days written notice.</p>

                    <p>
                      <strong>7. RENEWAL</strong>
                    </p>
                    <p>
                      <span className="bg-warning/20 px-1 rounded">
                        7.1 This agreement shall automatically renew for successive one-year terms unless either party
                        provides written notice of non-renewal at least sixty (60) days prior to the expiration date.
                      </span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollArea>
        </div>

        {/* Right Panel - Analysis Tabs */}
        <div className="w-1/2 flex flex-col">
          <Tabs defaultValue="summary" className="flex-1 flex flex-col">
            <div className="border-b">
              <TabsList className="w-full justify-start rounded-none h-12 bg-transparent">
                <TabsTrigger value="summary" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Summary
                </TabsTrigger>
                <TabsTrigger value="risks" className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Risks
                </TabsTrigger>
                <TabsTrigger value="chatbot" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Chatbot
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="flex-1 overflow-hidden">
              <TabsContent value="summary" className="h-full m-0">
                <ScrollArea className="h-full p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Document Summary</h3>
                      <Card>
                        <CardContent className="p-4">
                          <p className="text-sm leading-relaxed">
                            This is a standard service agreement for web development services. The contract establishes
                            the scope of work, payment terms, and responsibilities of both parties. Key terms include
                            30-day payment periods, intellectual property ownership transferring to the client upon
                            payment, and standard confidentiality provisions.
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Key Terms Explained</h3>
                      <div className="space-y-3">
                        <Card>
                          <CardContent className="p-4">
                            <h4 className="font-medium mb-2">Payment Terms</h4>
                            <p className="text-sm text-muted-foreground">
                              You have 30 days to pay invoices. If you're late, you'll be charged 1.5% interest per
                              month.
                            </p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardContent className="p-4">
                            <h4 className="font-medium mb-2">Intellectual Property</h4>
                            <p className="text-sm text-muted-foreground">
                              You'll own all the work once you've paid in full. Until then, the service provider retains
                              ownership.
                            </p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardContent className="p-4">
                            <h4 className="font-medium mb-2">Termination</h4>
                            <p className="text-sm text-muted-foreground">
                              Either party can end the contract with 30 days written notice.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Recommendations</h3>
                      <Card>
                        <CardContent className="p-4">
                          <ul className="text-sm space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                              <span>Consider negotiating a liability cap to limit your financial exposure</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                              <span>Set a calendar reminder for the renewal notice deadline</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                              <span>Ensure you have adequate insurance coverage for potential liabilities</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </ScrollArea>
              </TabsContent>

              <TabsContent value="risks" className="h-full m-0">
                <ScrollArea className="h-full p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Risk Assessment</h3>
                      <p className="text-muted-foreground mb-6">
                        We've identified {riskItems.length} potential risks in your document. Here's what you need to
                        know:
                      </p>
                    </div>

                    <div className="space-y-4">
                      {riskItems.map((risk, index) => (
                        <Card
                          key={index}
                          className="border-l-4"
                          style={{
                            borderLeftColor:
                              risk.severity === "high"
                                ? "hsl(var(--destructive))"
                                : risk.severity === "medium"
                                  ? "hsl(var(--warning))"
                                  : "hsl(var(--success))",
                          }}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-medium">{risk.title}</h4>
                              <Badge
                                variant={getSeverityColor(risk.severity) as any}
                                className="flex items-center gap-1"
                              >
                                {getSeverityIcon(risk.severity)}
                                {risk.severity.toUpperCase()}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{risk.description}</p>
                            <div className="bg-muted/50 p-3 rounded-lg mb-2">
                              <p className="text-sm font-medium text-primary mb-1">💡 Recommendation:</p>
                              <p className="text-sm">{risk.recommendation}</p>
                            </div>
                            <p className="text-xs text-muted-foreground">📍 {risk.location}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Shield className="h-4 w-4 text-primary" />
                          Overall Risk Assessment
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          This contract has <strong>moderate risk</strong> due to the unlimited liability clause. With
                          the recommended changes, this would become a <strong>low-risk</strong> agreement.
                        </p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Download Risk Report
                          </Button>
                          <Button size="sm">Get Legal Review</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </ScrollArea>
              </TabsContent>

              <TabsContent value="chatbot" className="h-full m-0 flex flex-col">
                <div className="flex-1 overflow-hidden">
                  <ScrollArea className="h-full p-6">
                    <div className="space-y-4">
                      {chatHistory.map((chat, index) => (
                        <div key={index} className={`flex ${chat.type === "user" ? "justify-end" : "justify-start"}`}>
                          <div
                            className={`max-w-[80%] p-3 rounded-lg ${
                              chat.type === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                            }`}
                          >
                            <p className="text-sm">{chat.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>

                <Separator />

                <div className="p-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ask me anything about your document..."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    />
                    <Button onClick={handleSendMessage} disabled={!chatMessage.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Ask about specific clauses, risks, or get recommendations
                  </p>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
