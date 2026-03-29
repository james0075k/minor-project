'use client';

import { useState, useEffect } from 'react';

const Chatbot = () => {
  const [showAssistant, setShowAssistant] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<
    { text: string; fromAssistant: boolean }[]
  >([]);

  // ✅ Expanded AI responses
  const assistantResponses: Record<string, string> = {
    // Greetings & Small Talk
    hi: "Hello! How can I help you today?",
    hello: "Hi there! Ready to learn or solve problems?",
    "how are you": "I am just code, but I am doing great! 😎",
    greeting: "Hey there! Let's solve some engineering and CS problems!",

    // Motivational / Advice
    advice: "Keep learning — every small step counts!",
    motivation: "Mistakes are proof that you are trying. Keep going!",

    // Electrical Engineering Formulas
    voltage: "Voltage (V) = Current (I) × Resistance (R), Ohm's law",
    current: "Current (I) = Voltage (V) / Resistance (R)",
    resistance: "Resistance (R) = Voltage (V) / Current (I), measured in Ohms (Ω)",
    power: "Power (P) = Voltage (V) × Current (I)",
    capacitor: "Capacitor stores electric charge; Q = C × V",
    inductor: "Inductor stores energy in magnetic field; V = L × dI/dt",

    // Mechanical / Physics Formulas
    kinetic: "Kinetic Energy: KE = 1/2 × m × v²",
    potential: "Potential Energy: PE = m × g × h",
    force: "Newton's 2nd Law: F = m × a",
    acceleration: "a = Δv / Δt",
    gravity: "F = G × (m1 × m2) / r²",

    // Computer Engineering / CS Terms
    cpu: "CPU = Central Processing Unit, brain of the computer",
    ram: "RAM = Random Access Memory, temporary storage for running programs",
    os: "OS = Operating System, manages hardware and software",
    algorithm: "Algorithm = step-by-step procedure to solve a problem",
    stack: "Stack = LIFO data structure (Last In, First Out)",
    queue: "Queue = FIFO data structure (First In, First Out)",
    pointer: "Pointer = variable that stores memory address of another variable",
    cache: "Cache = small, fast memory to speed up data access",
    networking: "Networking = connecting computers to share data, e.g., LAN, WAN",

    // Call / Meeting Tips
    "internet unstable": "Warning: Your internet connection seems unstable.",
    "mic muted": "Your microphone is muted.",
    "camera off": "Your camera is turned off.",
    "low bandwidth": "Low bandwidth detected — video quality may reduce.",
    "reconnect": "Try reconnecting if call freezes.",

    // Fun / Jokes
    joke: "Why did the capacitor kiss the diode? He just couldn’t resistor!",
    techjoke: "Why do programmers prefer dark mode? Because light attracts bugs!",
    funny: "I would tell you a UDP joke, but you might not get it…",

    // Misc / Quick Formulas
    ohm: "Ohm's Law: V = I × R",
    sine: "sin(θ) = opposite / hypotenuse",
    cosine: "cos(θ) = adjacent / hypotenuse",
    tangent: "tan(θ) = opposite / adjacent",
    pythagoras: "a² + b² = c²",
  };

  const handleAssistantMessage = () => {
    if (!newMessage.trim()) return;

    const userMsg = newMessage.toLowerCase();

    // ✅ 1️⃣ Check for simple arithmetic: +, -, *, /
    const arithmeticMatch = userMsg.match(/(-?\d+\.?\d*)\s*([\+\-\*\/])\s*(-?\d+\.?\d*)/);
    if (arithmeticMatch) {
      const num1 = parseFloat(arithmeticMatch[1]);
      const operator = arithmeticMatch[2];
      const num2 = parseFloat(arithmeticMatch[3]);
      let result: number;

      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num2 !== 0 ? num1 / num2 : NaN;
          break;
        default:
          result = NaN;
      }

      const reply = isNaN(result)
        ? "Cannot divide by zero!"
        : `The result of ${num1} ${operator} ${num2} is ${result}`;

      setChatMessages((prev) => [
        ...prev,
        { text: newMessage, fromAssistant: false },
        { text: reply, fromAssistant: true },
      ]);

      setNewMessage('');
      return; // stop here, don’t check dictionary
    }

    // ✅ 2️⃣ Check dictionary responses
    const key = Object.keys(assistantResponses).find((k) =>
      userMsg.includes(k)
    );

    const reply =
      (key && assistantResponses[key]) ||
      "Sorry, I don't understand. Try formulas, jokes, call tips, or arithmetic like 2+2";

    setChatMessages((prev) => [
      ...prev,
      { text: newMessage, fromAssistant: false },
      { text: reply, fromAssistant: true },
    ]);

    setNewMessage('');
  };

  // auto-scroll
  useEffect(() => {
    const chatContainer = document.getElementById("chat-container");
    if (chatContainer) chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [chatMessages]);

  return (
    <>
      {/* Chat Button */}
      <button
        className="cursor-pointer rounded-2xl bg-blue-500 px-4 py-2 hover:bg-blue-600 text-white"
        onClick={() => setShowAssistant((prev) => !prev)}
      >
        💬
      </button>

      {/* Chat Box */}
      {showAssistant && (
        <div className="fixed bottom-20 right-4 w-72 h-96 bg-white border shadow-lg rounded-lg flex flex-col z-50">
          {/* Header */}
          <div className="bg-blue-500 text-white p-2 rounded-t-lg font-bold flex justify-between items-center">
            Assistant
            <button onClick={() => setChatMessages([])} className="text-sm text-white">
              Clear
            </button>
          </div>

          {/* Messages */}
          <div id="chat-container" className="flex-1 overflow-y-auto p-2">
            {chatMessages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 text-sm ${
                  msg.fromAssistant ? "text-purple-600" : "text-black text-right"
                }`}
              >
                <strong>{msg.fromAssistant ? "AI" : "You"}:</strong> {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex p-2 border-t">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 border p-1 rounded text-black"
              placeholder="Ask something..."
              onKeyDown={(e) => e.key === "Enter" && handleAssistantMessage()}
            />
            <button
              className="bg-blue-500 text-white px-2 ml-2 rounded"
              onClick={handleAssistantMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;