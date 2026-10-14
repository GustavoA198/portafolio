import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import type { DiagramNode, DiagramNodeId, PortfolioContent } from '../../models/portfolio-content.model';
import { ASYNC_EDGES, DIAGRAM_LAYOUTS } from './system-diagram.layouts';

@Component({
  selector: 'app-system-diagram',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './system-diagram.component.html',
  styleUrl: './system-diagram.component.css',
})
export class SystemDiagramComponent {
  readonly content = input.required<PortfolioContent['diagram']>();

  protected readonly layouts = DIAGRAM_LAYOUTS;
  protected readonly asyncEdges = ASYNC_EDGES;
  protected readonly activeId = signal<DiagramNodeId | null>(null);

  protected readonly nodesById = computed(() => {
    const map = new Map<DiagramNodeId, DiagramNode>();
    for (const node of this.content().nodes) {
      map.set(node.id, node);
    }
    return map;
  });

  protected readonly active = computed(() => {
    const id = this.activeId();
    return id ? this.nodesById().get(id) ?? null : null;
  });

  protected node(id: DiagramNodeId): DiagramNode {
    return this.nodesById().get(id)!;
  }

  protected select(id: DiagramNodeId): void {
    this.activeId.set(id);
  }
}
