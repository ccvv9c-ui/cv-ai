declare module 'html2pdf.js' {
  interface Html2PdfOptions {
    margin?: number | [number, number] | [number, number, number, number];
    filename?: string;
    image?: { type?: string; quality?: number };
    html2canvas?: {
      scale?: number;
      useCORS?: boolean;
      letterRendering?: boolean;
      logging?: boolean;
      scrollY?: number;
      windowWidth?: number;
    };
    jsPDF?: {
      unit?: string;
      format?: string | [number, number];
      orientation?: 'portrait' | 'landscape';
    };
  }

  interface Html2PdfWorker {
    from(element: HTMLElement | string): Html2PdfWorker;
    set(options: Html2PdfOptions): Html2PdfWorker;
    save(): Promise<void>;
    outputPdf(type?: string, options?: any): Promise<any>;
  }

  function html2pdf(): Html2PdfWorker;
  namespace html2pdf {
    function set(options: Html2PdfOptions): Html2PdfWorker;
  }

  export = html2pdf;
}
