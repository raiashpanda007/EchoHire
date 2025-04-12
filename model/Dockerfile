
FROM rasa/rasa:3.6.10

WORKDIR /app
COPY . .

# Install extra requirements (if any)
RUN pip install --no-cache-dir -r requirements.txt

# Default command to run Rasa server
CMD ["rasa", "run", "--enable-api", "--cors", "*"]
