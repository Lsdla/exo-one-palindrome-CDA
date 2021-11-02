import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-panlindrome',
  templateUrl: './panlindrome.component.html',
  styleUrls: ['./panlindrome.component.scss']
})
export class PanlindromeComponent implements OnInit {

  postForm = new FormGroup({
    name:new FormControl('',[Validators.required]),
  })
  input_text :any;
  palindrome:any;

  constructor() { }

  ngOnInit(): void {
  }

  valider(){
    this.input_text = this.postForm?.value?.name;
    //console.log(this.input_text);
    
    this.palindrome = this.input_text.match(/[A-Za-z0-9]/gi).join("").toLowerCase();
    //console.log(this.palindrome);
    
    for(let i = 0 ; i < Math.floor(this.palindrome.length/2);i++){
      if(this.palindrome.charAt(i) !== this.palindrome.charAt(this.palindrome.length-i-1)){
        return false;
        
      }
    }
    return true;
  }

  

}
