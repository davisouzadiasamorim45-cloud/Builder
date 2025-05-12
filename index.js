// Diretor: usa o builder para construir o relatório
class ReportDirector {
  constructor(builder) {
    this.builder = builder;
  }

  constructReport(data) {
    this.builder.reset();
    this.builder.setTitle(data.title);
    this.builder.setContent(data.content);
    this.builder.setFooter(data.footer);
    return this.builder.getReport();
  }
}

// Interface do Builder
class ReportBuilder {
  reset() {}
  setTitle(title) {}
  setContent(content) {}
  setFooter(footer) {}
  getReport() {}
}

// Builder HTML
class HTMLReportBuilder extends ReportBuilder {
  constructor() {
    super();
    this.reset();
  }

  reset() {
    this.report = "";
  }

  setTitle(title) {
    this.report += `<h1>${title}</h1>\n`;
  }

  setContent(content) {
    this.report += `<p>${content}</p>\n`;
  }

  setFooter(footer) {
    this.report += `<footer>${footer}</footer>\n`;
  }

  getReport() {
    return this.report;
  }
}

// Builder PDF (simulado como string)
class PDFReportBuilder extends ReportBuilder {
  constructor() {
    super();
    this.reset();
  }

  reset() {
    this.report = "PDF Report\n";
  }

  setTitle(title) {
    this.report += `== ${title} ==\n`;
  }

  setContent(content) {
    this.report += `${content}\n`;
  }

  setFooter(footer) {
    this.report += `-- ${footer} --\n`;
  }

  getReport() {
    return this.report;
  }
}

// Builder Crystal Report (simulado como JSON)
class CrystalReportBuilder extends ReportBuilder {
  constructor() {
    super();
    this.reset();
  }

  reset() {
    this.report = {};
  }

  setTitle(title) {
    this.report.title = title;
  }

  setContent(content) {
    this.report.content = content;
  }

  setFooter(footer) {
    this.report.footer = footer;
  }

  getReport() {
    return JSON.stringify(this.report, null, 2);
  }
}

// Dados de exemplo
const inputData = {
  title: "Relatório de Vendas",
  content: "Total de vendas no mês: R$ 12.000",
  footer: "Gerado em 12/05/2025"
};

// Testando com os builders
const htmlBuilder = new HTMLReportBuilder();
const pdfBuilder = new PDFReportBuilder();
const crystalBuilder = new CrystalReportBuilder();

const director = new ReportDirector(htmlBuilder);
console.log("HTML Report:\n", director.constructReport(inputData));

director.builder = pdfBuilder;
console.log("\nPDF Report:\n", director.constructReport(inputData));

director.builder = crystalBuilder;
console.log("\nCrystal Report:\n", director.constructReport(inputData));
