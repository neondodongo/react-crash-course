const fs = require("node:fs/promises");
const path = require("node:path");

const filePath = path.resolve("posts.json");

async function ensureFileExists() {
  try {
    await fs.access(filePath); // Check if the file exists
  } catch (error) {
    // If the file does not exist, create it with an empty posts array
    await fs.writeFile(filePath, JSON.stringify({ posts: [] }, null, 2));
  }
}

async function getStoredPosts() {
  await ensureFileExists();
  const rawFileContent = await fs.readFile(filePath, { encoding: "utf-8" });
  const data = JSON.parse(rawFileContent);
  const storedPosts = data.posts ?? [];
  return storedPosts;
}

function storePosts(posts) {
  return fs.writeFile(
    filePath,
    JSON.stringify({ posts: posts || [] }, null, 2)
  );
}

exports.getStoredPosts = getStoredPosts;
exports.storePosts = storePosts;
