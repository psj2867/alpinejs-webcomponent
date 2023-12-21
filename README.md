Web Components addapter for Apine.js

```
  <script defer src="https://cdn.jsdelivr.net/npm/alpinejs-webcomponent@1.0.1/dist/component.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.13.3/dist/cdn.min.js"></script>
  <div>
    <template x-data x-for="a in [1,2,3,4]">
      <x-c></x-c>
    </template>
  </div>
  
  <div>
    <template x-if="true" x-data="{ a: 1 }">
      <x-c>test</x-c>
    </template>
  </div>
  
  <div x-data="{ item: 1 }">
    <x-c x-data="{ a: item }"></x-c>
  </div>
  
  <template x-webcomponent="x-c">
    <span x-text="a">e</span>
    <slot x-init="console.info($el.assignedNodes()[0])"></slot>
  </template>
```

```
  <div  x-data="">
    <input type="button" :value="open" @click="open = !open">
    <x-c2>
      btn name
      <div slot="content">Lorem ipsum</div>
    </x-c2>
  </div>

  <template x-webcomponent="x-c2">
    <style>
      div {
        border: 2px black solid;
      }
      .c {
        border: 1px red solid;
      }
    </style>
    <div x-data="{expanded :false}">
      <button @click="expanded = ! expanded"><slot></slot></button> 
      <div class="c" x-show="expanded">
          <slot name="content"></slot>
      </div>
      
      <template x-if="typeof open !== 'undefined'" >
          <span x-modelable="expanded" x-model="open"></span>      
      </template>
    </div>
  </template>
```