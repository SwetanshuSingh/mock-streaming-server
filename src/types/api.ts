import { z } from "zod";

const Message = z.object({
  role: z.string(),
  content: z.string(),
});

const Choice = z.object({
  index: z.number(),
  finish_reason: z.string().optional(),
  message: z.object({
    role: z.string(),
    content: z.string(),
  }),
});

const StreamChoice = z.object({
  delta: z.object({
    content: z.string(),
    role: z.string(),
  }),
  finish_reason: z.string().optional(),
  index: z.number(),
});

const ChatRequestSchema = z.object({
  messages: z.array(Message),
  model: z.string(),
  temperature: z.number().gte(0).lte(2).default(1),
  max_tokens: z.number().gte(1).lte(4096).default(1024),
  stream: z.boolean().default(false),
  stop: z.array(z.string()).max(4).optional(),
});

const StreamChatResponseSchema = z.object({
  id: z.string(),
  object: z.string().default("chat.completion.chunk"),
  model: z.string(),
  created: z.number(),
  choices: z.array(StreamChoice),
});

const ChatResponseSchema = z.object({
  id: z.string(),
  object: z.string().default("chat.completion"),
  model: z.string(),
  created: z.number(),
  choices: z.array(Choice),
});

export type ChatRequest = z.infer<typeof ChatRequestSchema>;
export type ChatResponse = z.infer<typeof ChatResponseSchema>;
export type StreamChatResponse = z.infer<typeof StreamChatResponseSchema>;
