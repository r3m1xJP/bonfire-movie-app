import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AuthenticationService } from '../_services/index';
import { CollectionService } from '../_services/index';

import { Collection } from '../_models/index';

@Component({
    moduleId: module.id,
    templateUrl: 'collections.component.html',
    styleUrls: ['collections.component.css']
})

export class CollectionsComponent implements OnInit {
    collections: Collection[] = [];

    animal: string;
    name: string;

    constructor(private collectionService: CollectionService,
                private authenticationService: AuthenticationService,
                public dialog: MatDialog) { }

    ngOnInit() {
        this.collectionService.getAllByUserId(this.authenticationService.getUserId())
        .subscribe(
            data => {
                this.collections = data.collections;
            },
            error => {
                console.log(error);
            });
    }

    // openDialog(): void {
    //     let dialogRef = this.dialog.open(CollectionsCreateDialog, {
    //         width: '250px',
    //         data: { name: this.name, animal: this.animal }
    //     });

    //     dialogRef.afterClosed().subscribe(result => {
    //         console.log('The dialog was closed');
    //         this.animal = result;
    //     });
    // }
}

@Component({
    selector: 'collections-create.dialog',
    templateUrl: 'collections-create.dialog.html'
  })

  export class CollectionsCreateDialog {

    constructor(
      public dialogRef: MatDialogRef<CollectionsCreateDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
  }
