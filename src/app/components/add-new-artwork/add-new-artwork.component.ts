import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ArtService } from './../../services/art.service';
import { FormGroup, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-add-new-artwork',
  templateUrl: './add-new-artwork.component.html',
  styleUrls: ['./add-new-artwork.component.css']
})
export class AddNewArtworkComponent implements OnInit {

  artForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private artService: ArtService
  ) {
    this.artForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: ['']
    })
  }

  ngOnInit() { }

  onSubmit(): any {
    this.artService.AddArt(this.artForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/art-list'))
      }, (err) => {
        console.log(err);
    });
  }

}
