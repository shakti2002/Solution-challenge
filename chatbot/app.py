import openai

# Set up your OpenAI API key
openai.api_key = "Your api key"

# User profile
user_profile = {
    'name': 'Shrinath',  # Example name
    'age': 20,       # Example age
    'Gender':'Male'
}

# Function to interact with the GPT model
def ask_gpt(prompt):
    messages = [{"role": "system", "content": "You are a financial experts that specializes in real estate investment and negotiation"}]

    
    messages.append({"role": "user", "content": prompt})
    response = openai.ChatCompletion.create(
        model = "gpt-3.5-turbo",
        messages = messages
    )
    ChatGPT_reply = response["choices"][0]["message"]["content"]
    messages.append({"role": "assistant", "content": ChatGPT_reply})
    print(ChatGPT_reply)

# Function to greet the user
def greet_user():
    if 'name' in user_profile:
        print(f"Chatbot: Hello, {user_profile['name']}! How can I assist you today?")
    else:
        print("Chatbot: Hello! How can I assist you today?")

# Function to handle personal questions
def handle_personal_question(question):
    if 'name' in question.lower():
        if 'name' in user_profile:
            print("Chatbot: My name is Chatbot.")
        else:
            print("Chatbot: I'm sorry, I don't know my name yet.")
    elif 'age' in question.lower():
        if 'age' in user_profile:
            print(f"Chatbot: I am {user_profile['age']} years old.")
        else:
            print("Chatbot: I'm sorry, I don't know my age yet.")
    else:
        print("Chatbot:", ask_gpt(question))

# Main function to handle the conversation
def main():
    greet_user()

    while True:
        user_input = input("You: ")

        # Check if the user wants to exit
        if user_input.lower() == 'exit':
            print("Chatbot: Goodbye!")
            break

        # Check if the user's input contains a personal question
        elif any(word.lower() in user_input.lower() for word in ['name', 'age']):
            handle_personal_question(user_input)

        else:
            # Use GPT for general conversation
            print("Chatbot:", ask_gpt(user_input))

if __name__ == "__main__":
    main()
