class WasmInstrument extends BaseInstrument {
    constructor() {
        super();
    }
    get templateID() { return "WasmInstrument"; }
    connectedCallback() {
        super.connectedCallback();
        this.m_wasmSimCanvas = this.querySelector('wasm-sim-canvas');
        this.m_wasmSimCanvas.m_wasmModuleName = this.urlConfig.wasmModule;
        this.m_wasmSimCanvas.m_wasmGaugeName = this.urlConfig.wasmGauge;
        this.m_wasmSimCanvas.m_wasmInstrumentGUid = this.getAttribute("Guid");
    }
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    onInteractionEvent(_args) {
    }
    Update() {
        super.Update();
    }
}
registerInstrument("wasm-instrument", WasmInstrument);
//# sourceMappingURL=WasmInstrument.js.map