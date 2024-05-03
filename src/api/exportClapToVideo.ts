import { ClapProject, serializeClap, blobToDataUri } from "@aitube/clap"

import { aitubeApiUrl } from "@/config"

export type SupportedExportFormat = "mp4" | "webm"
export const defaultExportFormat = "mp4"

export async function exportClapToVideo({
  clap,
  format = defaultExportFormat,
  token,
}: {
  clap: ClapProject

  /**
   * Desired output video format (defaults to "mp4")
   * 
   * Can be either "mp4" or "webm"
   */
  format?: SupportedExportFormat

  token?: string
}): Promise<string> {
  
  if (!clap) { throw new Error(`please provide a clap`) }

  if (format !== "mp4" && format !== "webm") { throw new Error(`please provide a valid format ("${format}" is unrecognized)`) }
  
  const hasToken = typeof token === "string" && token.length > 0

  const res = await fetch(`${aitubeApiUrl}export?f=${format}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-gzip",
      ...hasToken && {
        "Authorization": `Bearer ${token}`
      }
    },
    body: await serializeClap(clap),
    cache: "no-store",
  })

  const blob = await res.blob()

  const dataURL = await blobToDataUri(blob)
  
  return dataURL
}