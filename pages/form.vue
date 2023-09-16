<template>
    <div class="container">
    <section class="form">
        <form v-on:submit.prevent="handleSubmit">
        <div class="field">
            <label class="label">Nama Lengkap</label>
            <div class="control">
                <input v-model="form.name" class="input" type="text"
                 placeholder="Nama lengkap beserta gelar">
            </div>
            <label class="label">Message/Pesan</label>
            <div class="control">
                <textarea v-model="form.message" class="textarea"
                 placeholder="Isi Pesan Anda di Sini"></textarea>
            </div>
            <label class="label">Select Inquiry</label>
            <div class="control">
                <select v-model="form.inquiry_type">
                <option v-for="option in options.inquiry" v-bind:key="option.value">
                {{ option.text }}</option>
            </select>
            </div>
            <label class="label">Select Multiple</label>
            <div class="control">
                <select multiple v-model="form.usecases">
                <option>Debugging Code</option>
                <option>Fixing Errors</option>
                <option>User Support</option>
                <option v-for="option in options.inquiry" v-bind:key="option.value">
                {{ option.text }}</option>
                </select>
            </div>
            <label class="checkbox">
                <input type="checkbox" v-model="form.terms">
                I agree to the <a href="#">terms and conditions</a>
            </label>
            <div class="control">
                <label class="checkbox">
                    <input type="checkbox" v-model="form.concepts" value="promises">Promises
                </label>
                <label class="checkbox">
                    <input type="checkbox" v-model="form.concepts" value="Testing">Testing
                </label>
            </div>
            <label class="label">Radio</label>
            <div class="control">
                <label class="radio">
                    <input v-model="form.js_awesome" type="radio" value="Yes!">YES
                </label>
                <label class="radio">
                    <input v-model="form.js_awesome" type="radio" value="No!">NO!
                </label>
            </div>
            <div class="control">
                <button class="button is-primary">Submit</button>
            </div>
        </div>
        </form>
        <h4>Input Type Range</h4>
        <form @submit.prevent="registerAnswer">
            <label>How tall are you?<br>
            <input v-model="heightInp" type="range" min="50" max="235"> {{ heightInp }} cm
            </label>
            <button type="submit">Submit</button>
        </form>
        <div>
            <h3>Submitted answer:</h3>
            <p id="pAnswer">{{ inpValSubmitted }}</p>
        </div>
    </section>

    <section class="content">
        <br>
        <ul>
            <li v-for="(item, abc) in form" :key="abc">
                <strong> {{ abc }}:</strong> {{ item }}
            </li>
        </ul>
    </section>

    <div>
        <h3>Hasil Submit Form</h3>
        <ul>
            <li v-for="item in inputanForm" :key="item">
            {{ form }}</li>
        </ul>
    </div>
    </div>
</template>

<script>
    export default {
        layout (context) {
            return 'custom'
        },
        data() {
            return {
                form: {
                    name: '',
                    message:'',
                    inquiry_type: '',
                    usecases:[],
                    terms: false,
                    concepts:[],
                    js_awesome:''
                },
                options: {
                    inquiry: [
                        { value: 'feature', text: "Feature Request"},
                        { value: 'bug', text: "Bug Report"},
                        { value: 'support', text: "Support Saja"}
                    ]
                },
                inputanForm: [],
                heightInp: null,
                inpValSubmitted: 'Not submitted yet'
            }
        },
        methods: {
            handleSubmit() {
                // console.log(this.form)
                const item = {
                    form: this.form
                }
                this.inputanForm.push(item)
            },
            registerAnswer() {
                if(this.heightInp) {
                    this.inpValSubmitted = this.heightInp + ' cm';
                }
            }
        }
    }
</script>