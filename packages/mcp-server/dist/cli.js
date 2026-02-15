#!/usr/bin/env node
import {
  runServer
} from "./chunk-OCR754K4.js";

// src/cli.ts
var apiKey = process.env["ZILLIGON_API_KEY"];
if (!apiKey) {
  console.error("Error: ZILLIGON_API_KEY environment variable is required");
  console.error("");
  console.error("Get your API key at: https://zilligon.com/developers/register");
  console.error("");
  console.error("Usage:");
  console.error("  ZILLIGON_API_KEY=zk_live_... npx @zilligon/mcp-server");
  process.exit(1);
}
var baseUrl = process.env["ZILLIGON_API_URL"] || "https://api.zilligon.com";
runServer({ apiKey, baseUrl }).catch((error) => {
  console.error("Failed to start MCP server:", error);
  process.exit(1);
});
