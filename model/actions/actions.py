# actions/actions.py

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.events import SlotSet

class ActionStoreCandidateData(Action):
    def name(self):
        return "action_store_candidate_data"

    def run(self, dispatcher, tracker, domain):
        # example data collection logic
        name = tracker.get_slot("name")
        phone = tracker.get_slot("phone")
        ctc = tracker.get_slot("currentCtc")
        expected_ctc = tracker.get_slot("expectedCtc")
        notice_period = tracker.get_slot("noticePeriod")
        experience = tracker.get_slot("experience")

        # Your logic to hit backend endpoint here
        dispatcher.utter_message(text="Thanks! Your data has been recorded.")
        return []

class ActionAnswerFAQ(Action):
    def name(self):
        return "action_answer_faq"

    def run(self, dispatcher, tracker, domain):
        dispatcher.utter_message(text="Let me answer that for you...")
        return []
