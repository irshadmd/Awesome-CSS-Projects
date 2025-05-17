"use client"

import { useState, useRef, useEffect } from "react"
import { RotateCcw, RotateCw, Download, ImageIcon, Film } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { ToastProvider } from "@/components/ui/toast"

export default function EmojiRotator() {
  const [emoji, setEmoji] = useState("😀")
  const [angle, setAngle] = useState(0)
  const [fontSize, setFontSize] = useState(100)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  // const gifCanvasRef = useRef<HTMLCanvasElement>(null)
  const [isGeneratingGif, setIsGeneratingGif] = useState(false)
  const [gifProgress, setGifProgress] = useState(0)

  // Render emoji to canvas whenever emoji or angle changes
  useEffect(() => {
    renderEmojiToCanvas()
  }, [emoji, angle, fontSize])

  const renderEmojiToCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set canvas dimensions
    const size = 400
    canvas.width = size
    canvas.height = size

    // Draw emoji with rotation
    ctx.save()
    ctx.translate(size / 2, size / 2)
    ctx.rotate((angle * Math.PI) / 180)
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.font = `${fontSize}px Arial`
    ctx.fillText(emoji, 0, 0)
    ctx.restore()
  }

  const rotateClockwise = () => {
    setAngle((prev) => prev + 15)
  }

  const rotateCounterClockwise = () => {
    setAngle((prev) => prev - 15)
  }

  const resetRotation = () => {
    setAngle(0)
  }

  const downloadPNG = () => {
    if (!canvasRef.current) return

    // Create a temporary link element
    const link = document.createElement("a")
    link.download = `rotated-emoji-${angle}.png`
    link.href = canvasRef.current.toDataURL("image/png")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    toast({
      title: "Downloaded!",
      description: "PNG image saved to your downloads",
    })
  }

  const downloadSticker = () => {
    if (!canvasRef.current) return

    // For sticker, we use PNG with transparency
    const link = document.createElement("a")
    link.download = `emoji-sticker-${angle}.png`
    link.href = canvasRef.current.toDataURL("image/png")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    toast({
      title: "Downloaded!",
      description: "Sticker saved to your downloads",
    })
  }

  const generateGif = () => {
    if (!canvasRef.current) return
    setIsGeneratingGif(true)
    setGifProgress(0)

    // Create a simpler GIF approach without external libraries
    // We'll create a series of PNG frames and download them as a ZIP
    const startAngle = angle - 180
    const endAngle = angle + 180
    const frameCount = 30

    // Create a temporary canvas for the frames
    const tempCanvas = document.createElement("canvas")
    tempCanvas.width = 200
    tempCanvas.height = 200
    const ctx = tempCanvas.getContext("2d")

    if (!ctx) {
      setIsGeneratingGif(false)
      return
    }

    // Generate a single frame at the current angle
    ctx.clearRect(0, 0, 200, 200)
    ctx.save()
    ctx.translate(100, 100)
    ctx.rotate((angle * Math.PI) / 180)
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.font = `${fontSize * 0.5}px Arial`
    ctx.fillText(emoji, 0, 0)
    ctx.restore()

    // Create a download link for the single frame
    const link = document.createElement("a")
    link.download = `rotating-emoji-${angle}.png`
    link.href = tempCanvas.toDataURL("image/png")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setIsGeneratingGif(false)
    toast({
      title: "Image Created!",
      description: "Single frame image saved to your downloads",
    })
  }

  return (
    <ToastProvider>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-pink-100 to-purple-100 p-4">
        <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
          <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">Emoji Rotator</h1>

          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700">Enter or paste an emoji</label>
            <Input
              type="text"
              value={emoji}
              onChange={(e) => setEmoji(e.target.value)}
              className="text-2xl"
              maxLength={4}
              placeholder="Paste emoji here..."
            />
          </div>

          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Rotation: {angle}°</label>
              <Button variant="outline" size="sm" onClick={resetRotation}>
                Reset
              </Button>
            </div>
            <Slider
              value={[angle]}
              min={-180}
              max={180}
              step={1}
              onValueChange={(values) => setAngle(values[0])}
              className="mb-4"
            />
            <div className="flex justify-center space-x-4">
              <Button onClick={rotateCounterClockwise} variant="outline" size="icon">
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button onClick={rotateClockwise} variant="outline" size="icon">
                <RotateCw className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-700">Size: {fontSize}px</label>
            <Slider value={[fontSize]} min={50} max={200} step={5} onValueChange={(values) => setFontSize(values[0])} />
          </div>

          <div className="mb-6 flex flex-col items-center">
            <canvas ref={canvasRef} className="mb-4 h-40 w-40 rounded-lg border border-gray-200 bg-white shadow-sm" />
            {/* <canvas ref={gifCanvasRef} className="hidden" /> */}
          </div>

          <Tabs defaultValue="png" className="mb-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="png">PNG</TabsTrigger>
              <TabsTrigger value="sticker">Sticker</TabsTrigger>
              <TabsTrigger value="gif">GIF</TabsTrigger>
            </TabsList>
            <TabsContent value="png" className="mt-4">
              <p className="mb-4 text-sm text-gray-600">Download as a static PNG image with your current rotation.</p>
              <Button onClick={downloadPNG} className="w-full">
                <Download className="mr-2 h-4 w-4" /> Download PNG
              </Button>
            </TabsContent>
            <TabsContent value="sticker" className="mt-4">
              <p className="mb-4 text-sm text-gray-600">Download as a transparent sticker to use in messaging apps.</p>
              <Button onClick={downloadSticker} className="w-full">
                <ImageIcon className="mr-2 h-4 w-4" /> Download Sticker
              </Button>
            </TabsContent>
            <TabsContent value="gif" className="mt-4">
              <p className="mb-4 text-sm text-gray-600">Download a single frame of your rotated emoji.</p>
              <Button onClick={generateGif} className="w-full" disabled={isGeneratingGif}>
                <Film className="mr-2 h-4 w-4" />
                {isGeneratingGif ? `Generating...` : "Download Frame"}
              </Button>
            </TabsContent>
          </Tabs>

          <div className="rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
            <p>
              Tip: After downloading, you can use these images in WhatsApp, social media, or any app that supports
              images/GIFs.
            </p>
          </div>
        </div>
      </div>
    </ToastProvider>
  )
}
