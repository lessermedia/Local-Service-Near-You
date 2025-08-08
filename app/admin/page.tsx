import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, FileText, Users, TrendingUp, Plus, Settings, BarChart3 } from 'lucide-react'
import Link from "next/link"

const adminStats = [
  {
    title: "Total Clients",
    value: "47",
    change: "+12%",
    icon: Users,
    color: "text-blue-600"
  },
  {
    title: "Published Articles",
    value: "1,234",
    change: "+23%", 
    icon: FileText,
    color: "text-green-600"
  },
  {
    title: "SEO Pages",
    value: "89",
    change: "+8%",
    icon: TrendingUp,
    color: "text-purple-600"
  },
  {
    title: "Active Backlinks",
    value: "5,678",
    change: "+15%",
    icon: Building2,
    color: "text-orange-600"
  }
]

const quickActions = [
  {
    title: "Add New Client",
    description: "Create a new client profile and start generating content",
    href: "/admin/clients/new",
    icon: Users,
    color: "bg-blue-50 text-blue-600 border-blue-200"
  },
  {
    title: "Generate Articles",
    description: "Bulk generate backlink articles for existing clients",
    href: "/admin/articles/generate",
    icon: FileText,
    color: "bg-green-50 text-green-600 border-green-200"
  },
  {
    title: "Create SEO Pages",
    description: "Add new programmatic SEO pages and content",
    href: "/admin/seo-pages/new",
    icon: TrendingUp,
    color: "bg-purple-50 text-purple-600 border-purple-200"
  },
  {
    title: "Manage Content",
    description: "Edit existing articles and update client information",
    href: "/admin/content",
    icon: Settings,
    color: "bg-gray-50 text-gray-600 border-gray-200"
  }
]

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-gray-600">Manage clients, articles, and SEO content</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <BarChart3 className="h-4 w-4 mr-2" />
                Analytics
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Quick Add
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {adminStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-green-600">{stat.change} from last month</p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-50 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link key={index} href={action.href}>
                <Card className={`hover:shadow-lg transition-shadow cursor-pointer border-2 ${action.color}`}>
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 rounded-full bg-current/10 flex items-center justify-center mx-auto mb-2">
                      <action.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                    <CardDescription>{action.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Clients</CardTitle>
              <CardDescription>Latest client additions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Phoenix Auto Repair", location: "Phoenix, AZ", articles: 15, status: "Active" },
                  { name: "Boston Dental Care", location: "Boston, MA", articles: 8, status: "Pending" },
                  { name: "Chicago HVAC Pro", location: "Chicago, IL", articles: 22, status: "Active" }
                ].map((client, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium">{client.name}</div>
                      <div className="text-sm text-gray-600">{client.location} • {client.articles} articles</div>
                    </div>
                    <Badge variant={client.status === 'Active' ? 'default' : 'secondary'}>
                      {client.status}
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/admin/clients">
                  <Button variant="outline" className="w-full">View All Clients</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content Pipeline</CardTitle>
              <CardDescription>Articles in various stages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Draft Articles</span>
                  <Badge variant="secondary">23</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Ready for Review</span>
                  <Badge variant="outline">12</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Published Today</span>
                  <Badge>8</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Scheduled</span>
                  <Badge variant="secondary">15</Badge>
                </div>
              </div>
              <div className="mt-4">
                <Link href="/admin/content">
                  <Button variant="outline" className="w-full">Manage Content</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
