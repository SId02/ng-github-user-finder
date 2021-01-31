import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ChangeDetectorRef,
} from '@angular/core';

import { ApiserviceService } from '../../services/apiservice.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
})
export class ReposComponent implements OnInit, OnChanges {
  @Input() repoUrl: string;
  repos = [];

  constructor(
    private githubService: ApiserviceService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.repoUrl) {
      this.githubService.getRepos(this.repoUrl).subscribe(
        (repos: []) => {
          this.repos = repos;
          this.ref.detectChanges();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
