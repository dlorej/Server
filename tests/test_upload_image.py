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

print("Status:", response.status_code)
print("Response:", response.text)

try:
    print("JSON:", response.json())
except requests.exceptions.JSONDecodeError:
    print("Response is not valid JSON")