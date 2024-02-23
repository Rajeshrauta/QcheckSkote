import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
} from "@angular/core";

@Component({
  selector: "app-popover",
  templateUrl: "./popover.component.html",
  styleUrls: ["./popover.component.scss"],
})
export class PopoverComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["poperOverData"]?.currentValue) {
      this.poperOverData = changes?.["poperOverData"]?.currentValue;
    }
  }

  @Input() poperOverData: any[] = [];
  ngOnInit(): void {}
}
