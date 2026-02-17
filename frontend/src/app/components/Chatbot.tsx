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
        // Optionally delete the bot response following it? 
        // For now, let's just delete the user message so they can re-type.
        // A more complex logic would be to find the index and remove subsequent messages.
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
            {/* Floating Action Button with Pulse Effect */}
            <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
                
                <Button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        "h-14 w-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110",
                        isOpen ? "bg-red-600 hover:bg-red-600 rotate-90" : "bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 animate-gradient-x hover:from-blue-700 hover:to-indigo-700 hover:via-purple-600"
                    )}
                    size="icon"
                >
                    {isOpen ? <X className="size-8 dark:text-white text-black" /> : <MessageSquareCode className="size-6 dark:text-white text-black" />}
                </Button>
            </div>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-28 right-6 z-50 w-[95vw] max-w-[400px] h-[600px] max-h-[80vh] flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300">
                    <Card className="h-full w-full shadow-2xl border-0 overflow-hidden flex flex-col bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md ring-1 ring-zinc-200 dark:ring-zinc-800">
                        {/* Header */}
                        <CardHeader className="bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 animate-gradient-x p-4 shrink-0">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                                        <Bot className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-white text-lg font-bold">AnantNetra AI</CardTitle>
                                        <p className="text-blue-100 text-xs flex items-center gap-1">
                                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> Online
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-white/80 hover:text-white hover:bg-white/20"
                                    onClick={handleClearChat}
                                    title="Clear Chat"
                                >
                                    <RefreshCcw className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardHeader>

                        {/* Messages Area */}
                        <CardContent className="flex-1 p-0 overflow-hidden bg-slate-50 dark:bg-zinc-950/50">
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
                                            {/* Avatar for Bot */}
                                            {msg.role === "bot" && (
                                                <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0 border border-indigo-200 dark:border-indigo-800">
                                                    <Bot className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                                                </div>
                                            )}

                                            <div className="flex flex-col gap-1 max-w-[80%]">
                                                {/* Message Bubble */}
                                                <div
                                                    className={cn(
                                                        "px-4 py-3 text-sm shadow-sm relative",
                                                        msg.role === "user"
                                                            ? "bg-blue-600 text-white rounded-2xl rounded-tr-none"
                                                            : "bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 rounded-2xl rounded-tl-none border border-zinc-200 dark:border-zinc-700"
                                                    )}
                                                >
                                                    {msg.content}
                                                </div>

                                                {/* Actions & Time */}
                                                <div className={cn(
                                                    "flex items-center gap-2 px-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-zinc-400",
                                                    msg.role === "user" ? "justify-end" : "justify-start"
                                                )}>
                                                    <span>
                                                        {msg.timestamp?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                    </span>
                                                    {msg.role === "user" && (
                                                        <>
                                                            <button
                                                                onClick={() => handleEdit(msg.id, msg.content)}
                                                                className="hover:text-blue-500 transition-colors p-1"
                                                            >
                                                                <Pencil className="h-3 w-3" />
                                                            </button>
                                                            <button
                                                                onClick={() => handleDelete(msg.id)}
                                                                className="hover:text-red-500 transition-colors p-1"
                                                            >
                                                                <Trash2 className="h-3 w-3" />
                                                            </button>
                                                        </>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Avatar for User */}
                                            {msg.role === "user" && (
                                                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 border border-blue-200 dark:border-blue-800">
                                                    <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                                </div>
                                            )}
                                        </div>
                                    ))}

                                    {isTyping && (
                                        <div className="flex justify-start gap-2">
                                            <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0 border border-indigo-200 dark:border-indigo-800">
                                                <Bot className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                                            </div>
                                            <div className="bg-white dark:bg-zinc-800 px-4 py-3 rounded-2xl rounded-tl-none border border-zinc-200 dark:border-zinc-700 flex items-center gap-2">
                                                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></span>
                                            </div>
                                        </div>
                                    )}
                                    <div ref={scrollRef} />
                                </div>
                            </ScrollArea>
                        </CardContent>

                        {/* Input Area */}
                        <CardFooter className="p-4 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
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
                                    className="flex-1 bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 min-h-[44px]"
                                    disabled={isTyping}
                                />
                                <Button
                                    type="submit"
                                    size="icon"
                                    disabled={!input.trim() || isTyping}
                                    className="h-11 w-11 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md shrink-0"
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
