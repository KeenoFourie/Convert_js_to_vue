<template>
    <div>
        <div id="contact_form">
            <div id="contact_footer">
                <form action="https://formspree.io/f/mzbqnenj" method="POST">
                <div class="mb-3" id="form_inputs_style">
                      <label for="exampleInputName" class="form-label">Name:</label>
                      <input type="text" name="name" class="form-control" id="exampleInputName1" placeholder="Please enter your name..." aria-describedby="nameHelp" required>
                </div>
                <div class="mb-3" id="form_inputs_style">
                      <label for="exampleInputSurname" class="form-label">Surname:</label>
                      <input type="text" name="surname" class="form-control" id="exampleInputSurname1" placeholder="Please enter your surname..." aria-describedby="surnameHelp" required>
                </div>
                <div class="mb-3" id="form_inputs_style">
                      <label for="exampleInputEmail" class="form-label">Email address:</label>
                      <input type="email" name="email" class="form-control" id="exampleInputEmail1" placeholder="We won't share your email with anyone else..." aria-describedby="emailHelp" required>
                </div>
                <div class="mb-3" id="form_inputs_style">
                    <label for="exampleFormControlTextarea1" class="form-label">Comments or Issues:</label>
                    <textarea class="form-control" name="comments" id="exampleFormComments" rows="3" placeholder="Insert your comments here..." required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>