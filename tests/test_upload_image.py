import requests

url = "https://servertest-sooty.vercel.app/api/upload"

with open("fish.jpg", "rb") as image:
    response = requests.post(
        url,
        data=image,
        headers={
            "Content-Type": "image/jpeg",
            "x-filename": "image.jpg"
        }
    )

print(response.json())