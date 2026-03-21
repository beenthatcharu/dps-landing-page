export async function POST(req) {
  try {
    const body = await req.json();

    const res = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.HUBSPOT_TOKEN}`,
      },
      body: JSON.stringify({
        properties: {
          email: body.email,
          firstname: body.name,
        },
      }),
    });

    const data = await res.json();

    return Response.json(data);

  } catch (error) {
    console.error(error);
    return Response.json({ error: "Error" }, { status: 500 });
  }
}