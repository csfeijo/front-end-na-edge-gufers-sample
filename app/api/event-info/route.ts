export const runtime = "edge"

export async function GET() {
  const eventData = {
    title: "Edge Computing no Frontend",
    date: "15/07/2025",
    time: "19:00",
    location: "Café Coworking - Tecnopuc",
    description: "Construindo aplicações web ultra rápidas e escaláveis",
    status: "upcoming",
  }

  return Response.json(eventData, {
    headers: {
      "Cache-Control": "public, max-age=3600", // Cache for 1 hour
    },
  })
}
