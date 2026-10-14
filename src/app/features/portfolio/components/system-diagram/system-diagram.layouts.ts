import type { DiagramEdgeId, DiagramNodeId } from '../../models/portfolio-content.model';

export interface LayoutNode {
  id: Exclude<DiagramNodeId, 'docker'>;
  x: number;
  y: number;
}

export interface LayoutEdge {
  id: DiagramEdgeId;
  d: string;
  labelX: number;
  labelY: number;
}

export interface LayoutFlow {
  d: string;
  async: boolean;
}

export interface DiagramLayout {
  key: 'wide' | 'narrow';
  viewBox: string;
  width: number;
  height: number;
  nodeWidth: number;
  nodeHeight: number;
  nodes: LayoutNode[];
  edges: LayoutEdge[];
  flows: LayoutFlow[];
  docker: { x: number; y: number; width: number; height: number; labelX: number; labelY: number };
  legend: { x: number; y: number };
}

// Los mensajes por la cola no bloquean a quien los publica
export const ASYNC_EDGES: ReadonlySet<DiagramEdgeId> = new Set(['publish', 'deliver']);

// Coordenadas a mano: rutas ortogonales; el orden de edges es el número de paso
export const DIAGRAM_LAYOUTS: DiagramLayout[] = [
  {
    key: 'wide',
    viewBox: '0 0 572 394',
    width: 572,
    height: 394,
    nodeWidth: 128,
    nodeHeight: 60,
    nodes: [
      { id: 'angular', x: 0, y: 20 },
      { id: 'api', x: 214, y: 20 },
      { id: 'cache', x: 444, y: 20 },
      { id: 'queue', x: 214, y: 160 },
      { id: 'worker', x: 214, y: 300 },
      { id: 'db', x: 444, y: 300 },
    ],
    edges: [
      { id: 'http', d: 'M128 50 H210', labelX: 139, labelY: 41 },
      { id: 'lookup', d: 'M342 50 H440', labelX: 371, labelY: 41 },
      { id: 'publish', d: 'M278 80 V156', labelX: 290, labelY: 124 },
      { id: 'deliver', d: 'M278 220 V296', labelX: 290, labelY: 264 },
      { id: 'write', d: 'M342 330 H440', labelX: 371, labelY: 321 },
    ],
    flows: [
      { d: 'M128 50 H214 M342 50 H444', async: false },
      { d: 'M278 80 V160 M278 220 V300', async: true },
      { d: 'M342 330 H444', async: false },
    ],
    docker: { x: 196, y: 4, width: 164, height: 386, labelX: 210, labelY: 378 },
    legend: { x: 0, y: 340 },
  },
  {
    key: 'narrow',
    viewBox: '0 0 352 452',
    width: 352,
    height: 452,
    nodeWidth: 122,
    nodeHeight: 56,
    nodes: [
      { id: 'angular', x: 8, y: 0 },
      { id: 'api', x: 8, y: 112 },
      { id: 'cache', x: 230, y: 112 },
      { id: 'queue', x: 8, y: 232 },
      { id: 'worker', x: 8, y: 352 },
      { id: 'db', x: 230, y: 352 },
    ],
    edges: [
      { id: 'http', d: 'M69 56 V108', labelX: 81, labelY: 88 },
      { id: 'lookup', d: 'M130 140 H226', labelX: 165, labelY: 132 },
      { id: 'publish', d: 'M69 168 V228', labelX: 81, labelY: 204 },
      { id: 'deliver', d: 'M69 288 V348', labelX: 81, labelY: 324 },
      { id: 'write', d: 'M130 380 H226', labelX: 165, labelY: 372 },
    ],
    flows: [
      { d: 'M69 56 V112 M130 140 H230', async: false },
      { d: 'M69 168 V232 M69 288 V352', async: true },
      { d: 'M130 380 H230', async: false },
    ],
    docker: { x: 0, y: 100, width: 154, height: 348, labelX: 12, labelY: 438 },
    legend: { x: 230, y: 252 },
  },
];
