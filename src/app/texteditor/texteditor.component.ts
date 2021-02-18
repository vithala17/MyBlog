import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-texteditor',
  templateUrl: './texteditor.component.html',
  styleUrls: ['./texteditor.component.scss']
})
export class TexteditorComponent implements OnInit {

  editorForm : FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.editorForm = new FormGroup({
      "editor":new FormControl(null)
  }
  )}

  onSubmit(){
    console.log(this.editorForm.get("editor").value);
  }

}
