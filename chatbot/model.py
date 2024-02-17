import openai
import pickle

# Set your OpenAI API key
openai.api_key = "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"

# Load your conversation data
with open('conversation_data.txt', 'r') as file:
    dataset = file.readlines()

# Format the messages properly
formatted_dataset = []
for message in dataset:
    formatted_message = {
        "role": "user",
        "content": message.strip()  # Remove leading/trailing whitespace and newline characters
    }
    formatted_dataset.append(formatted_message)

# Fine-tune the model with your formatted dataset
fine_tuned_model = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=formatted_dataset
)

# Save the fine-tuned model to a pickle file
with open('fine_tuned_model.pkl', 'wb') as file:
    pickle.dump(fine_tuned_model, file)




# openai.api_key = "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"