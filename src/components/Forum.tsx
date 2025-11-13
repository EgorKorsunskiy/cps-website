'use client'

import { useState } from 'react';
import { MessageSquare, ThumbsUp, MessageCircle, Search, Plus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';

interface ForumPost {
  id: number;
  title: string;
  content: string;
  author: string;
  category: string;
  likes: number;
  replies: number;
  timestamp: string;
  tags: string[];
}

export function Forum() {
  const [searchQuery, setSearchQuery] = useState('');
  const [posts] = useState<ForumPost[]>([
    {
      id: 1,
      title: 'Help with Dynamic Programming approach for Knapsack',
      content: 'I\'m struggling to understand the optimal substructure for the 0/1 knapsack problem. Can someone explain...',
      author: 'Alex Chen',
      category: 'Help',
      likes: 12,
      replies: 8,
      timestamp: '2 hours ago',
      tags: ['Dynamic Programming', 'Knapsack'],
    },
    {
      id: 2,
      title: 'Best resources for learning Graph algorithms?',
      content: 'Looking for recommendations on tutorials or courses that cover graph algorithms comprehensively...',
      author: 'Sarah Williams',
      category: 'Discussion',
      likes: 24,
      replies: 15,
      timestamp: '5 hours ago',
      tags: ['Graph', 'Resources'],
    },
    {
      id: 3,
      title: 'Sharing my solution to today\'s contest problem',
      content: 'Here\'s an O(n log n) solution to Problem C from today\'s contest. The key insight is...',
      author: 'Mike Johnson',
      category: 'Solutions',
      likes: 45,
      replies: 12,
      timestamp: '1 day ago',
      tags: ['Contest', 'Solutions'],
    },
    {
      id: 4,
      title: 'Tips for optimizing Time Complexity',
      content: 'What are your favorite techniques for optimizing solutions that are too slow?',
      author: 'Emma Davis',
      category: 'Discussion',
      likes: 31,
      replies: 22,
      timestamp: '1 day ago',
      tags: ['Optimization', 'Tips'],
    },
    {
      id: 5,
      title: 'Segment Tree vs Fenwick Tree - When to use which?',
      content: 'Can someone explain the practical differences and use cases for these data structures?',
      author: 'James Wilson',
      category: 'Help',
      likes: 18,
      replies: 11,
      timestamp: '2 days ago',
      tags: ['Data Structures', 'Segment Tree'],
    },
    {
      id: 6,
      title: 'Interview experience at FAANG company',
      content: 'Just finished my technical interviews and wanted to share my experience and tips...',
      author: 'Lisa Anderson',
      category: 'Discussion',
      likes: 67,
      replies: 34,
      timestamp: '3 days ago',
      tags: ['Interview', 'Career'],
    },
  ]);

  const categoryColors: Record<string, string> = {
    Help: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    Discussion: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    Solutions: 'bg-green-500/20 text-green-400 border-green-500/30',
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
          <div>
            <h1 className="text-4xl mb-2 text-slate-100">Forum</h1>
            <p className="text-xl text-slate-400">
              Ask questions, share solutions, and learn from the community.
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900 border-slate-700 text-slate-100">
              <DialogHeader>
                <DialogTitle>Create New Post</DialogTitle>
                <DialogDescription className="text-slate-400">
                  Share your question or discussion with the community.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter post title..."
                    className="bg-slate-800 border-slate-700 text-slate-100"
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-slate-100"
                  >
                    <option value="help">Help</option>
                    <option value="discussion">Discussion</option>
                    <option value="solutions">Solutions</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    placeholder="Write your post content..."
                    rows={6}
                    className="bg-slate-800 border-slate-700 text-slate-100"
                  />
                </div>
                <div>
                  <Label htmlFor="tags">Tags (comma separated)</Label>
                  <Input
                    id="tags"
                    placeholder="e.g. Dynamic Programming, Arrays"
                    className="bg-slate-800 border-slate-700 text-slate-100"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Post to Forum
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search posts, topics, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-slate-800 border-slate-700 text-slate-100"
          />
        </div>
      </div>

      {/* Forum Posts */}
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-colors cursor-pointer">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <Badge className={categoryColors[post.category]}>
                      {post.category}
                    </Badge>
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-slate-400 border-slate-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl text-slate-100 hover:text-blue-400 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-slate-400 mt-2">
                    {post.content}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-slate-400">
                <div className="flex items-center gap-4">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.timestamp}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.replies}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="py-12 text-center">
            <MessageSquare className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <p className="text-slate-400">No posts found matching your search.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
