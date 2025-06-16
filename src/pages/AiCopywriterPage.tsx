
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Brain, 
  Wand2, 
  Copy, 
  Download,
  Sparkles,
  FileText,
  Mail,
  MessageSquare,
  Megaphone
} from 'lucide-react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AiCopywriterPage = () => {
  const showContent = useAnimateIn(false, 300);
  const [formData, setFormData] = useState({
    title: '',
    informationDump: '',
    targetAudience: '',
    productName: '',
    brandVoice: '',
    additionalContext: '',
    copyType: '',
    platform: '',
    tone: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCopy, setGeneratedCopy] = useState('');

  const copyTypes = [
    { value: 'AD_SCRIPT', label: 'Ad Script', icon: <Megaphone size={16} /> },
    { value: 'EMAIL_COPY', label: 'Email Copy', icon: <Mail size={16} /> },
    { value: 'ADVERTORIAL', label: 'Advertorial', icon: <FileText size={16} /> },
    { value: 'VSL_SCRIPT', label: 'VSL Script', icon: <FileText size={16} /> },
    { value: 'LANDING_PAGE', label: 'Landing Page', icon: <FileText size={16} /> },
    { value: 'SOCIAL_POST', label: 'Social Post', icon: <MessageSquare size={16} /> },
    { value: 'SMS_COPY', label: 'SMS Copy', icon: <MessageSquare size={16} /> }
  ];

  const tones = [
    'Professional',
    'Casual',
    'Friendly',
    'Authoritative',
    'Playful',
    'Urgent',
    'Inspiring',
    'Educational'
  ];

  const platforms = [
    'Facebook',
    'Instagram',
    'TikTok',
    'Google Ads',
    'YouTube',
    'LinkedIn',
    'Twitter/X',
    'Email'
  ];

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate AI generation - replace with actual API call
    setTimeout(() => {
      setGeneratedCopy(`Here's your generated ${formData.copyType.toLowerCase().replace('_', ' ')} copy:

🔥 Transform Your Life in Just 30 Days! 🔥

Are you tired of feeling stuck and ready to unlock your true potential? 

Our revolutionary ${formData.productName || 'system'} has helped thousands of people just like you achieve extraordinary results.

✅ Proven method used by industry leaders
✅ Step-by-step guidance included  
✅ 30-day money-back guarantee
✅ Join 10,000+ success stories

Don't let another day pass you by. Your future self will thank you.

👆 Click the link above to get started today!

P.S. This special offer ends soon - secure your spot now!`);
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
      <AnimatedTransition show={showContent} animation="slide-up">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Brain className="text-primary" size={32} />
              <h1 className="text-3xl font-bold">AI Copywriter</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Generate high-converting copy inspired by your swipe file using AI
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Wand2 size={20} />
                Copy Generator
              </h2>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="title" className="text-sm font-medium">
                    Title/Brief Description
                  </Label>
                  <Input
                    id="title"
                    placeholder="e.g., Facebook ad for fitness app launch"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="copyType" className="text-sm font-medium">
                    Copy Type
                  </Label>
                  <Select onValueChange={(value) => setFormData({...formData, copyType: value})}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select copy type" />
                    </SelectTrigger>
                    <SelectContent>
                      {copyTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center gap-2">
                            {type.icon}
                            {type.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="platform" className="text-sm font-medium">
                      Platform
                    </Label>
                    <Select onValueChange={(value) => setFormData({...formData, platform: value})}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Platform" />
                      </SelectTrigger>
                      <SelectContent>
                        {platforms.map((platform) => (
                          <SelectItem key={platform} value={platform}>
                            {platform}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="tone" className="text-sm font-medium">
                      Tone
                    </Label>
                    <Select onValueChange={(value) => setFormData({...formData, tone: value})}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Tone" />
                      </SelectTrigger>
                      <SelectContent>
                        {tones.map((tone) => (
                          <SelectItem key={tone} value={tone}>
                            {tone}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="productName" className="text-sm font-medium">
                    Product/Service Name
                  </Label>
                  <Input
                    id="productName"
                    placeholder="e.g., FitTracker Pro"
                    value={formData.productName}
                    onChange={(e) => setFormData({...formData, productName: e.target.value})}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="targetAudience" className="text-sm font-medium">
                    Target Audience
                  </Label>
                  <Input
                    id="targetAudience"
                    placeholder="e.g., Busy professionals aged 25-45"
                    value={formData.targetAudience}
                    onChange={(e) => setFormData({...formData, targetAudience: e.target.value})}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="informationDump" className="text-sm font-medium">
                    Information Dump *
                  </Label>
                  <Textarea
                    id="informationDump"
                    placeholder="Paste all information about your product, benefits, features, pricing, testimonials, etc."
                    rows={6}
                    value={formData.informationDump}
                    onChange={(e) => setFormData({...formData, informationDump: e.target.value})}
                    className="mt-1"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Tip: Use our URL Transcribe tool to extract information from your landing page
                  </p>
                </div>

                <div>
                  <Label htmlFor="brandVoice" className="text-sm font-medium">
                    Brand Voice (Optional)
                  </Label>
                  <Textarea
                    id="brandVoice"
                    placeholder="Describe your brand's voice and personality..."
                    rows={3}
                    value={formData.brandVoice}
                    onChange={(e) => setFormData({...formData, brandVoice: e.target.value})}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="additionalContext" className="text-sm font-medium">
                    Additional Context (Optional)
                  </Label>
                  <Textarea
                    id="additionalContext"
                    placeholder="Any additional context, requirements, or inspiration..."
                    rows={3}
                    value={formData.additionalContext}
                    onChange={(e) => setFormData({...formData, additionalContext: e.target.value})}
                    className="mt-1"
                  />
                </div>

                <div className="flex gap-3">
                  <Button 
                    onClick={handleGenerate}
                    disabled={!formData.informationDump || isGenerating}
                    className="flex-1 gap-2"
                  >
                    {isGenerating ? (
                      <>
                        <Sparkles className="animate-spin" size={18} />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles size={18} />
                        Generate Copy
                      </>
                    )}
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/url-transcribe" className="gap-2">
                      <FileText size={18} />
                      URL Transcribe
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Generated Copy */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Copy size={20} />
                Generated Copy
              </h2>
              
              {generatedCopy ? (
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="whitespace-pre-wrap text-sm font-mono">
                      {generatedCopy}
                    </pre>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="gap-2"
                      onClick={() => navigator.clipboard.writeText(generatedCopy)}
                    >
                      <Copy size={16} />
                      Copy to Clipboard
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Download size={16} />
                      Download
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Wand2 size={16} />
                      Generate Variations
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Brain size={48} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg mb-2">No copy generated yet</p>
                  <p className="text-sm">
                    Fill out the form and click "Generate Copy" to get started
                  </p>
                </div>
              )}
            </Card>
          </div>

          {/* Recent Generations */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Generations</h2>
            <div className="text-center py-8 text-muted-foreground">
              <FileText size={48} className="mx-auto mb-4 opacity-50" />
              <p>Your recent AI generations will appear here</p>
            </div>
          </Card>
        </div>
      </AnimatedTransition>
    </div>
  );
};

export default AiCopywriterPage;
