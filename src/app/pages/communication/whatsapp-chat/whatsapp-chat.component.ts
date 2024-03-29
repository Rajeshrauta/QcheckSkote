import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import {
  UntypedFormBuilder,
  Validators,
  UntypedFormGroup,
} from "@angular/forms";

import { ChatUser, ChatMessage } from "./sub-components/chat.model";

import { chatData, chatMessagesData } from "./sub-components/data";

@Component({
  selector: "app-whatsapp-chat",
  templateUrl: "./whatsapp-chat.component.html",
  styleUrl: "./whatsapp-chat.component.scss",
})
export class WhatsappChatComponent implements OnInit, AfterViewInit {
  @ViewChild("scrollEle") scrollEle;
  @ViewChild("scrollRef") scrollRef;

  username = "Steven Franklin";

  // bread crumb items
  breadCrumbItems: Array<{}>;
  chatData: ChatUser[];
  chatMessagesData: ChatMessage[];
  formData: UntypedFormGroup;
  // Form submit
  chatSubmit: boolean;
  usermessage: string;
  emoji: any = "";

  constructor(public formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: "Communication" },
      { label: "Whatsapp Chat", active: true },
    ];

    this.formData = this.formBuilder.group({
      message: ["", [Validators.required]],
    });

    this.onListScroll();

    this._fetchData();
  }

  ngAfterViewInit() {
    this.scrollEle.SimpleBar.getScrollElement().scrollTop = 100;
    this.scrollRef.SimpleBar.getScrollElement().scrollTop = 200;
  }

  /**
   * Returns form
   */
  get form() {
    return this.formData.controls;
  }

  private _fetchData() {
    this.chatData = chatData;
    this.chatMessagesData = chatMessagesData;
  }

  onListScroll() {
    if (this.scrollRef !== undefined) {
      setTimeout(() => {
        this.scrollRef.SimpleBar.getScrollElement().scrollTop =
          this.scrollRef.SimpleBar.getScrollElement().scrollHeight + 1500;
      }, 500);
    }
  }

  chatUsername(name) {
    this.username = name;
    this.usermessage = "Hello";
    this.chatMessagesData = [];
    const currentDate = new Date();

    this.chatMessagesData.push({
      name: this.username,
      message: this.usermessage,
      time: currentDate.getHours() + ":" + currentDate.getMinutes(),
    });
  }

  /**
   * Save the message in chat
   */
  messageSave() {
    const message = this.formData.get("message").value;
    const currentDate = new Date();
    if (this.formData.valid && message) {
      // Message Push in Chat
      this.chatMessagesData.push({
        align: "right",
        name: "Henry Wells",
        message,
        time: currentDate.getHours() + ":" + currentDate.getMinutes(),
      });
      this.onListScroll();

      // Set Form Data Reset
      this.formData = this.formBuilder.group({
        message: null,
      });
    }

    this.chatSubmit = true;
  }

  // Delete Message
  deleteMessage(event: any) {
    event.target.closest("li").remove();
  }

  // Copy Message
  copyMessage(event: any) {
    navigator.clipboard.writeText(
      event.target.closest("li").querySelector("p").innerHTML
    );
  }

  // Delete All Message
  deleteAllMessage(event: any) {
    var allMsgDelete: any = document
      .querySelector(".chat-conversation")
      ?.querySelectorAll("li");
    allMsgDelete.forEach((item: any) => {
      item.remove();
    });
  }

  // Emoji Picker
  showEmojiPicker = false;
  sets: any = [
    "native",
    "google",
    "twitter",
    "facebook",
    "emojione",
    "apple",
    "messenger",
  ];
  set: any = "twitter";
  toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event: any) {
    const { emoji } = this;
    if (this.formData.get("message").value) {
      var text = `${emoji}${event.emoji.native}`;
    } else {
      text = event.emoji.native;
    }
    this.emoji = text;
    this.showEmojiPicker = false;
  }

  onFocus() {
    this.showEmojiPicker = false;
  }

  onBlur() {}

  closeReplay() {
    document.querySelector(".replyCard")?.classList.remove("show");
  }

  // Contact Search
  ContactSearch() {
    var input: any,
      filter: any,
      ul: any,
      li: any,
      a: any | undefined,
      i: any,
      txtValue: any;
    input = document.getElementById("searchContact") as HTMLAreaElement;
    filter = input.value.toUpperCase();
    ul = document.querySelectorAll(".chat-list");
    ul.forEach((item: any) => {
      li = item.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h5")[0];
        txtValue = a?.innerText;
        if (txtValue?.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    });
  }
}
