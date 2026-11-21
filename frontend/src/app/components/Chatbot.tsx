"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquareCode, X, Send, Loader2, Trash2, Pencil, RefreshCcw, Bot, User } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Message = {
    id: string;
    role: "user" | "bot";
    content: string;
    timestamp: Date;
};

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "bot",
            content: "Hello! I am AnantNetra's AI assistant. Ask me anything about our services, security solutions, or company!",
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isTyping, isOpen]);

    const handleSend = async (messageContent: string = input) => {
        if (!messageContent.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: messageContent,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: userMessage.content }),
            });

            if (!res.ok) {
                throw new Error("Failed to fetch response");
            }

            const data = await res.json();
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "bot",
                content: data.reply || "Sorry, I encountered an error. Please try again.",
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("Chat error:", error);
            setMessages((prev) => [
                ...prev,
                {
                    id: (Date.now() + 1).toString(),
                    role: "bot",
                    content: "Sorry, I am having trouble connecting right now. Please check your internet connection and try again.",
                    timestamp: new Date()
                },
            ]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleDelete = (id: string) => {
        setMessages((prev) => prev.filter((msg) => msg.id !== id));
    };

    const handleEdit = (id: string, content: string) => {
        setInput(content);
        handleDelete(id);
    };

    const handleClearChat = () => {
        setMessages([
            {
                id: "1",
                role: "bot",
                content: "Chat cleared. How can I help you now?",
                timestamp: new Date(),
            },
        ]);
    };

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center group">
                <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 bg-brand-elevated text-brand-text px-3 py-1.5 rounded-full text-sm font-medium shadow-lg border border-brand-border whitespace-nowrap pointer-events-none origin-right">
                    Ask About AnantNetra ✨
                </span>

                <Button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        "h-14 w-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 relative border border-brand-border",
                        isOpen
                            ? "bg-red-600 hover:bg-red-500 text-white"
                            : "bg-brand-accent hover:bg-brand-accent/90 text-brand-ink"
                    )}
                    size="icon"
                    aria-label={isOpen ? "Close chat" : "Open chat"}
                >
                    {isOpen ? <X className="size-7" /> : <MessageSquareCode className="size-6" />}
                </Button>
            </div>

            {isOpen && (
                <div className="fixed bottom-28 right-6 z-50 w-[95vw] max-w-[400px] h-[600px] max-h-[80vh] flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300">
                    <Card className="h-full w-full shadow-2xl overflow-hidden flex flex-col bg-brand-surface/95 backdrop-blur-md border border-brand-border">
                        <CardHeader className="bg-brand-elevated/90 border-b border-brand-border p-4 shrink-0">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-brand-accent/15 p-2 rounded-full border border-brand-accent/30">
                                        <Bot className="h-6 w-6 text-brand-accent" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-brand-text text-lg font-bold">AnantNetra AI</CardTitle>
                                        <p className="text-brand-muted text-xs flex items-center gap-1">
                                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" /> Online
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-brand-muted hover:text-brand-text hover:bg-brand-base/60"
                                    onClick={handleClearChat}
                                    title="Clear Chat"
                                    aria-label="Clear chat"
                                >
                                    <RefreshCcw className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardHeader>

                        <CardContent className="flex-1 p-0 overflow-hidden bg-brand-base/40">
                            <ScrollArea className="h-full p-4 scroll-smooth">
                                <div className="flex flex-col gap-4 pb-4">
                                    {messages.map((msg) => (
                                        <div
                                            key={msg.id}
                                            className={cn(
                                                "group flex w-full gap-2",
                                                msg.role === "user" ? "justify-end" : "justify-start"
                                            )}
                                        >
                                            {msg.role === "bot" && (
                                                <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0 border border-brand-accent/20">
                                                    <Bot className="h-4 w-4 text-brand-accent" />
                                                </div>
                                            )}

                                            <div className="flex flex-col gap-1 max-w-[80%]">
                                                <div
                                                    className={cn(
                                                        "px-4 py-3 text-sm shadow-sm relative",
                                                        msg.role === "user"
                                                            ? "bg-brand-accent text-brand-ink rounded-2xl rounded-tr-none"
                                                            : "bg-brand-elevated text-brand-text rounded-2xl rounded-tl-none border border-brand-border"
                                                    )}
                                                >
                                                    {msg.content}
                                                </div>

                                                <div className={cn(
                                                    "flex items-center gap-2 px-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-brand-muted",
                                                    msg.role === "user" ? "justify-end" : "justify-start"
                                                )}>
                                                    <span>
                                                        {msg.timestamp?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                    </span>
                                                    {msg.role === "user" && (
                                                        <>
                                                            <button
                                                                onClick={() => handleEdit(msg.id, msg.content)}
                                                                className="hover:text-brand-accent transition-colors p-1"
                                                                aria-label="Edit message"
                                                            >
                                                                <Pencil className="h-3 w-3" />
                                                            </button>
                                                            <button
                                                                onClick={() => handleDelete(msg.id)}
                                                                className="hover:text-red-400 transition-colors p-1"
                                                                aria-label="Delete message"
                                                            >
                                                                <Trash2 className="h-3 w-3" />
                                                            </button>
                                                        </>
                                                    )}
                                                </div>
                                            </div>

                                            {msg.role === "user" && (
                                                <div className="w-8 h-8 rounded-full bg-brand-accent/15 flex items-center justify-center shrink-0 border border-brand-accent/25">
                                                    <User className="h-4 w-4 text-brand-accent" />
                                                </div>
                                            )}
                                        </div>
                                    ))}

                                    {isTyping && (
                                        <div className="flex justify-start gap-2">
                                            <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0 border border-brand-accent/20">
                                                <Bot className="h-4 w-4 text-brand-accent" />
                                            </div>
                                            <div className="bg-brand-elevated px-4 py-3 rounded-2xl rounded-tl-none border border-brand-border flex items-center gap-2">
                                                <span className="w-2 h-2 bg-brand-accent/80 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                                <span className="w-2 h-2 bg-brand-accent/80 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                                <span className="w-2 h-2 bg-brand-accent/80 rounded-full animate-bounce"></span>
                                            </div>
                                        </div>
                                    )}
                                    <div ref={scrollRef} />
                                </div>
                            </ScrollArea>
                        </CardContent>

                        <CardFooter className="p-4 bg-brand-surface border-t border-brand-border">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSend();
                                }}
                                className="flex w-full gap-2 items-end"
                            >
                                <Input
                                    placeholder="Type your message..."
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="flex-1 bg-brand-base/60 border-brand-border text-brand-text placeholder:text-brand-muted min-h-[44px] focus-visible:ring-brand-accent/40"
                                    disabled={isTyping}
                                    aria-label="Chat message"
                                />
                                <Button
                                    type="submit"
                                    size="icon"
                                    disabled={!input.trim() || isTyping}
                                    className="h-11 w-11 rounded-full bg-brand-accent hover:bg-brand-accent/90 text-brand-ink shadow-md shrink-0 disabled:opacity-50"
                                    aria-label="Send message"
                                >
                                    {isTyping ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                                </Button>
                            </form>
                        </CardFooter>
                    </Card>
                </div>
            )}
        </>
    );
}
