"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"
import {
  FileText,
  AlertTriangle,
  TrendingUp,
  Download,
  Share2,
  Eye,
  Shield,
  CheckCircle,
  XCircle,
  Clock,
  BarChart3,
  PieChartIcon,
  Activity,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  // Sample data for visualizations
  const riskDistribution = [
    { name: "High Risk", value: 2, color: "hsl(var(--destructive))" },
    { name: "Medium Risk", value: 3, color: "hsl(var(--warning))" },
    { name: "Low Risk", value: 5, color: "hsl(var(--success))" },
    { name: "No Risk", value: 15, color: "hsl(var(--muted))" },
  ]

  const confidenceData = [
    { category: "Contract Terms", score: 92 },
    { category: "Risk Assessment", score: 88 },
    { category: "Legal Compliance", score: 95 },
    { category: "Language Clarity", score: 85 },
  ]

  const documentHistory = [
    { date: "2024-01", documents: 12, risks: 8 },
    { date: "2024-02", documents: 18, risks: 12 },
    { date: "2024-03", documents: 25, risks: 15 },
    { date: "2024-04", documents: 22, risks: 10 },
    { date: "2024-05", documents: 30, risks: 18 },
    { date: "2024-06", documents: 35, risks: 20 },
  ]

  const recentDocuments = [
    {
      name: "Service Agreement.pdf",
      date: "2024-06-15",
      status: "analyzed",
      riskLevel: "medium",
      confidence: 88,
    },
    {
      name: "Employment Contract.pdf",
      date: "2024-06-14",
      status: "analyzed",
      riskLevel: "low",
      confidence: 95,
    },
    {
      name: "NDA Template.pdf",
      date: "2024-06-13",
      status: "analyzed",
      riskLevel: "high",
      confidence: 82,
    },
    {
      name: "Lease Agreement.pdf",
      date: "2024-06-12",
      status: "processing",
      riskLevel: "pending",
      confidence: 0,
    },
  ]

  const getRiskColor = (level: string) => {
    switch (level) {
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

  const getRiskIcon = (level: string) => {
    switch (level) {
      case "high":
        return <XCircle className="h-4 w-4" />
      case "medium":
        return <AlertTriangle className="h-4 w-4" />
      case "low":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Visual insights and document analytics</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share Dashboard
            </Button>
          </div>
        </div>

        {/* Demo Banner */}
        <Card className="mb-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">📊 Demo Dashboard</h3>
                <p className="text-muted-foreground">
                  This dashboard shows analytics from 142 analyzed documents. View risk trends, confidence scores, and
                  document insights.
                </p>
              </div>
              <div className="flex gap-2">
                <Link href="/analysis">
                  <Button variant="outline" size="sm">
                    View Analysis Demo
                  </Button>
                </Link>
                <Link href="/upload">
                  <Button size="sm">Upload New Document</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">142</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">+12%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">High Risk Items</CardTitle>
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-destructive">+3</span> from last week
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Confidence</CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">+2%</span> improvement
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Time Saved</CardTitle>
              <Clock className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47h</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-6">
            {/* Risk Heatmap */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChartIcon className="h-5 w-5" />
                  Risk Distribution Heatmap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={riskDistribution}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {riskDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-3">
                    {riskDistribution.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                          <span className="text-sm">{item.name}</span>
                        </div>
                        <span className="text-sm font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Confidence Score */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Confidence Score Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {confidenceData.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{item.category}</span>
                        <span className="text-sm text-muted-foreground">{item.score}%</span>
                      </div>
                      <Progress value={item.score} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Document Trends */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Document Analysis Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={documentHistory}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="documents"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        name="Documents"
                      />
                      <Line
                        type="monotone"
                        dataKey="risks"
                        stroke="hsl(var(--destructive))"
                        strokeWidth={2}
                        name="Risks Found"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Recent Activity */}
          <div className="space-y-6">
            {/* Recent Documents */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Recent Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentDocuments.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{doc.name}</p>
                        <p className="text-xs text-muted-foreground">{doc.date}</p>
                      </div>
                      <div className="flex items-center gap-2 ml-2">
                        {doc.status === "analyzed" && (
                          <>
                            <Badge variant={getRiskColor(doc.riskLevel) as any} className="flex items-center gap-1">
                              {getRiskIcon(doc.riskLevel)}
                              {doc.riskLevel}
                            </Badge>
                            <Link href="/analysis">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </Link>
                          </>
                        )}
                        {doc.status === "processing" && <Badge variant="secondary">Processing...</Badge>}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Compare Versions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Version Comparison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Contract v2.1</span>
                      <Badge variant="success">Current</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">3 risks identified</p>
                  </div>

                  <div className="p-4 rounded-lg border border-dashed">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Contract v2.0</span>
                      <Badge variant="secondary">Previous</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">5 risks identified</p>
                  </div>

                  <Button variant="outline" className="w-full bg-transparent">
                    Compare Versions
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Export Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Export Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent hover:bg-muted/50 transition-colors"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Download Summary Report
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent hover:bg-muted/50 transition-colors"
                  >
                    <Shield className="h-4 w-4 mr-2" />
                    Save PDF with Highlights
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent hover:bg-muted/50 transition-colors"
                  >
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Export Analytics Data
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent" />
                  AI Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-muted/50">
                    <p className="text-sm font-medium mb-1">💡 Trend Alert</p>
                    <p className="text-xs text-muted-foreground">
                      High-risk clauses increased 15% this month. Consider reviewing liability terms more carefully.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50">
                    <p className="text-sm font-medium mb-1">🎯 Recommendation</p>
                    <p className="text-xs text-muted-foreground">
                      Your confidence scores are improving. Keep using our AI suggestions for better contract terms.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
