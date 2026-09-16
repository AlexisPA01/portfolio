import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { TranslateService } from '../../shared/services/translate';
import { PROJECTS } from '../../shared/data/projects.data';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  constructor(public translation: TranslateService) { }
  private readonly route = inject(ActivatedRoute);
  readonly projectId = signal<string | null>(null);
  isModalOpen = signal(false);
  imgModal = "";

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      const id = params.get('id');

      this.projectId.set(id);
    });
  }

  get textPage() {
    return this.translation.translations.projectDetail;
  }

  get text(): any {
    const id = this.projectId();

    if (!id) {
      return null;
    }

    return this.translation.translations.projectDetail[
      id as keyof typeof this.translation.translations.projectDetail
    ];
  }

  get project() {
    const id = this.projectId();

    if (!id) {
      return null;
    }

    return PROJECTS.find(project => project.id === id) ?? null;
  }

  openModal(imgSrc: string) {
    this.isModalOpen.set(true);
    this.imgModal = imgSrc;
  }
}
