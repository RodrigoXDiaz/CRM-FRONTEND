import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const introMessages = [
  {
    id: "intro-1",
    sender: "assistant",
  text: "Hola, soy Aurora, tu asistente de Speed CRM. ¿Cómo puedo ayudarte hoy?",
  },
  {
    id: "intro-2",
    sender: "assistant",
    text: "Puedo guiarte para iniciar sesión, registrarte o explicarte el panel principal.",
  },
];

const quickReplies = [
  {
    id: "login",
    label: "Necesito iniciar sesión",
    userText: "Necesito ayuda para iniciar sesión",
    assistantText:
      "Perfecto. Para iniciar sesión usa tu correo corporativo y contraseña. Si quieres, te llevo ahora mismo al formulario.",
    navigateTo: "/login",
  },
  {
    id: "register",
    label: "Crear una cuenta",
    userText: "Quiero crear una cuenta nueva",
    assistantText:
      "Genial. Solo necesitarás tu nombre, correo y una contraseña segura. Te llevo al registro cuando estés listo.",
    navigateTo: "/register",
  },
  {
    id: "overview",
    label: "Conocer el panel",
    userText: "Muéstrame el panel principal",
    assistantText:
      "El dashboard resume actividad, metas y novedades. Te aseguro que te encantará. ¿Vamos al panel?",
    navigateTo: "/",
  },
];

const getAssistantReply = (content) => {
  const normalized = content.toLowerCase();

  if (normalized.includes("registr")) {
    return {
      text: "Para registrarte ingresa tu nombre completo, correo y una contraseña de al menos 8 caracteres. Puedes continuar desde el botón de registro.",
      navigateTo: "/register",
    };
  }

  if (normalized.includes("iniciar") || normalized.includes("login")) {
    return {
      text: "Ve a tu panel de inicio de sesión, escribe tu correo y contraseña. Si olvidaste tus datos, contacta a soporte.",
      navigateTo: "/login",
    };
  }

  if (normalized.includes("panel") || normalized.includes("dashboard")) {
    return {
      text: "El panel principal muestra los indicadores clave, accesos rápidos y actividades recientes. También puedes llegar desde la barra lateral.",
      navigateTo: "/",
    };
  }

  return {
    text: "Soy una demo conversacional, pero con gusto te doy orientación básica. Pregunta por iniciar sesión, registrarte o conocer el dashboard.",
  };
};

const FloatingChat = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => introMessages);
  const [pendingMessage, setPendingMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (open) {
      // Ensure intro messages exist when chat opens again
      setMessages((prev) => (prev.length ? prev : introMessages));
    }
  }, [open]);

  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const pushMessage = (sender, text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `${sender}-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`,
        sender,
        text,
      },
    ]);
  };

  const respondWith = (reply, { navigateAfter } = {}) => {
    setIsTyping(true);
    setTimeout(() => {
      pushMessage("assistant", reply.text);
      setIsTyping(false);

      if (navigateAfter && reply.navigateTo) {
        setTimeout(() => {
          navigate(reply.navigateTo);
          setOpen(false);
        }, 650);
      }
    }, 500);
  };

  const handleSend = (event) => {
    event.preventDefault();
    const content = pendingMessage.trim();
    if (!content) return;

    pushMessage("user", content);
    setPendingMessage("");
    respondWith(getAssistantReply(content));
  };

  const handleQuickReply = (reply) => {
    pushMessage("user", reply.userText);
    respondWith({ text: reply.assistantText, navigateTo: reply.navigateTo }, { navigateAfter: true });
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        whileTap={{ scale: 0.93 }}
        className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-blue-500 to-sky-500 text-white shadow-[0_22px_45px_-18px_rgba(37,99,235,0.75)] transition hover:scale-105"
      >
        {open ? <X size={24} /> : <MessageCircle size={26} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-30 w-[22rem] overflow-hidden rounded-3xl border border-white/20 bg-slate-900/85 shadow-[0_35px_80px_-35px_rgba(15,23,42,0.85)] backdrop-blur-2xl"
          >
            <div className="relative px-5 pb-4 pt-5">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-br from-indigo-500/40 via-sky-400/30 to-transparent blur-3xl" />
              <div className="relative flex items-center justify-between">
                <div>
                  <p className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-indigo-200/80">
                    <Sparkles size={14} />
                    Aurora
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white">Asistente Speed CRM</h3>
                  <p className="text-xs text-slate-300/90">Disponible para guiarte</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <MessageCircle size={20} />
                </div>
              </div>
            </div>

            <div className="flex max-h-80 flex-col gap-3 overflow-y-auto px-5 pb-4" role="log">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow-sm ${
                      message.sender === "user"
                        ? "rounded-br-sm bg-indigo-500 text-white"
                        : "rounded-bl-sm bg-white/10 text-slate-100"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-xs text-slate-200">
                    <span className="inline-flex gap-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-200" style={{ animationDelay: "0ms" }} />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-200" style={{ animationDelay: "120ms" }} />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-200" style={{ animationDelay: "240ms" }} />
                    </span>
                    escribiendo…
                  </div>
                </div>
              )}

              <span ref={scrollRef} />
            </div>

            <div className="space-y-3 border-t border-white/10 bg-slate-900/70 px-5 py-4">
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply.id}
                    type="button"
                    onClick={() => handleQuickReply(reply)}
                    className="rounded-full border border-indigo-400/40 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-100 transition hover:border-indigo-300 hover:bg-indigo-500/20"
                  >
                    {reply.label}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSend} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-3 py-2">
                <input
                  type="text"
                  value={pendingMessage}
                  onChange={(event) => setPendingMessage(event.target.value)}
                  placeholder="Escribe tu mensaje"
                  className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500 text-white transition hover:bg-indigo-400"
                  disabled={!pendingMessage.trim()}
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChat;
