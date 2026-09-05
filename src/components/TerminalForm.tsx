import React, { useState, useRef, useEffect } from "react";
import { cn } from "../lib/utils";
import { RiRestartLine } from "react-icons/ri";

// Steps are as follows:
// Step 0: User inputs their email and presses Return.
// Step 1: User types their message and presses Return (or Shift+Return for newline).
// Step 2: User confirms sending the message by typing 'y' or 'n' and pressing Return.
// Step 3: Final status is displayed based on the submission result.
export function TerminalForm({ className }: { className?: string }) {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirm, setConfirm] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "aborted">("idle");

  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const confirmRef = useRef<HTMLInputElement>(null);

  // Auto-focus the active input based on the current step
  useEffect(() => {
    if (step === 0) emailRef.current?.focus();
    if (step === 1) messageRef.current?.focus();
    if (step === 2) confirmRef.current?.focus();
  }, [step]);

  // Reset button handler to clear all inputs and reset the form state
  const handleReset = () => {
    setStep(0);
    setEmail("");
    setMessage("");
    setConfirm("");
    setStatus("idle");
    // Reset the textarea height back to 1 line
    if (messageRef.current) {
      messageRef.current.style.height = "auto";
    }
  };

  // Handle Enter key for email input
  const handleEmailKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && email.trim() !== "") {
      e.preventDefault();
      setStep(1);
    }
  };

  // Handle Enter key for message input, allowing Shift+Enter for newlines
  const handleMessageKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (message.trim() !== "") {
        setStep(2);
      }
    }
  };

  // Handle Enter key for confirmation input (y/n)
  const handleConfirmKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const val = confirm.trim().toLowerCase();
      
      if (val === "y" || val === "yes") {
        submitPayload();
      } else if (val === "n" || val === "no") {
        setStatus("aborted");
        setStep(3);
      }
    }
  };

  // Submit the payload to the Web3Forms API
  const submitPayload = async () => {
    setStatus("loading");
    setStep(3);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.PUBLIC_WEB3FORMS_KEY, 
          email: email,
          message: message,
        }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  // Terminal prompt component to display the command line interface
  const Prompt = ({ cmd }: { cmd: string }) => (
    <div className="flex flex-wrap items-center mb-1 text-base md:text-lg">
      <span className="text-slate-400">{"["}</span>
      <span className="text-emerald-500">guest@server2</span>
      &nbsp;
      <span className="text-sky-400">~/contact</span>
      <span className="text-slate-400">{"]"}</span>
      <span className="text-slate-400">$</span>
      <span className="text-slate-300 ml-1">{cmd}</span>
    </div>
  );

  return (
    <div className={cn("w-full max-w-3xl rounded-xl border border-white/10 bg-slate-950 shadow-2xl overflow-hidden font-mono", className)}>
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-3 bg-slate-900 border-b border-white/5">
        {/* Left side fixed width to balance header */}
        <div className="flex gap-2 w-16">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
        </div>
        
        <div className="flex-1 text-center text-xs text-slate-500">~/contact:bash</div>
        
        {/* Right side Restart Button */}
        <div className="flex justify-end w-16">
          <button 
            onClick={handleReset}
            title="Restart Terminal"
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-500 hover:text-emerald-400 transition-colors"
          >
            <RiRestartLine className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-6 md:p-8 flex flex-col gap-4 min-h-100">
        
        {/* Step 0: Email Input */}
        {step >= 0 && (
          <div className={step > 0 ? "opacity-50" : "opacity-100"}>
            <Prompt cmd="set_sender_email:" />
            <div className="flex items-center mt-1">
              <span className="text-emerald-400 mr-2">{">"}</span>
              <input
                ref={emailRef}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleEmailKeyDown}
                disabled={step > 0}
                placeholder={step === 0 ? "Enter your email and press Return..." : ""}
                className="flex-1 bg-transparent border-none outline-none text-slate-200 placeholder:text-slate-600 disabled:text-slate-400 w-full"
              />
            </div>
          </div>
        )}

        {/* Step 1: Message Input */}
        {step >= 1 && (
          <div className={step > 1 ? "opacity-50 animate-in fade-in" : "animate-in fade-in"}>
            <Prompt cmd="write_message:" />
            <div className="flex items-start mt-1">
              <span className="text-emerald-400 mr-2 mt-1">{">"}</span>
              <textarea
                ref={messageRef}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  e.target.style.height = "auto";
                  e.target.style.height = `${e.target.scrollHeight}px`;
                }}
                onKeyDown={handleMessageKeyDown}
                disabled={step > 1}
                rows={1}
                placeholder={step === 1 ? "Type your message... [Enter to save, Shift+Enter for newline]" : ""}
                className="flex-1 bg-transparent border-none outline-none text-slate-200 placeholder:text-slate-600 disabled:text-slate-400 resize-none w-full overflow-hidden"
              />
            </div>
          </div>
        )}

        {/* Step 2: Confirmation */}
        {step >= 2 && (
          <div className={step > 2 ? "opacity-50 animate-in fade-in" : "animate-in fade-in"}>
            <Prompt cmd="send_message (y/n):" />
            <div className="flex items-center mt-1">
              <span className="text-emerald-400 mr-2">{">"}</span>
              <input
                ref={confirmRef}
                type="text"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value.trim())}
                onKeyDown={handleConfirmKeyDown}
                disabled={step > 2}
                maxLength={3}
                className="flex-1 bg-transparent border-none outline-none text-slate-200 disabled:text-slate-400 w-full"
              />
            </div>
          </div>
        )}

        {/* Step 3: Final Status */}
        {step === 3 && (
          <div className="mt-2 animate-in fade-in">
            {status === "loading" && (
              <div className="text-sky-400 animate-pulse">
                [ EXECUTING ] Sending payload...
              </div>
            )}
            {status === "success" && (
              <div className="text-emerald-400">
                [ 200 OK ] Payload delivered successfully. Connection terminated.
              </div>
            )}
            {status === "aborted" && (
              <div className="text-amber-400">
                [ ABORTED ] Message discarded. Connection closed.
              </div>
            )}
            {status === "error" && (
              <div className="text-red-400">
                [ ERR 500 ] Packet loss detected. Connection failed.
              </div>
            )}
            {status !== "loading" && (
              <div className="mt-2 flex items-center">
                <Prompt cmd="" />
                <span className="w-2.5 h-5 bg-emerald-400 animate-pulse inline-block align-middle ml-1 mt-1"></span>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}