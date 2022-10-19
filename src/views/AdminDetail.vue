<template>
  <div>
    <NavbarView />
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <h2>Tambahkan <strong>Menu</strong></h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Kode</th>
                  <th scope="col">Nama</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Ready</th>
                  <th scope="col">Gambar</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <b-form-input
                      type="number"
                      id="inline-form-input-name"
                      class="mb-2 mr-sm-2 mb-sm-0 input-number"
                      placeholder="1"
                    />
                  </th>
                  <td>
                    <b-form-input
                      type="text"
                      id="inline-form-input-name"
                      class="mb-2 mr-sm-2 mb-sm-0 input-kode"
                      placeholder="K-01"
                    />
                  </td>
                  <td>
                    <strong
                      ><b-form-input
                        type="text"
                        id="inline-form-input-name"
                        class="mb-2 mr-sm-2 mb-sm-0 input-nama"
                        placeholder="Nama ice cream"
                    /></strong>
                  </td>
                  <td>
                    <b-form-input
                      type="text"
                      id="inline-form-input-name"
                      class="mb-2 mr-sm-2 mb-sm-0 input-harga"
                      placeholder="1000"
                    />
                  </td>
                  <td>
                    <select
                      class="form-select input-ready"
                      aria-label="Default select example"
                    >
                      <option disabled>Ready/Kosong</option>
                      <option value="1">Ready</option>
                      <option value="2">Kosong</option>
                    </select>
                  </td>
                  <td>
                    <div class="mb-3">
                      <input class="form-control" type="file" id="formFile" />
                    </div>
                  </td>

                  <td class="text-success">
                    <b-button variant="success" class="mb-2"> submit </b-button>
                  </td>
                </tr>
                <tr>
                  <th>
                    <b-form-input
                      type="number"
                      id="inline-form-input-name"
                      class="mb-2 mr-sm-2 mb-sm-0 input-number"
                      placeholder="2"
                    />
                  </th>
                  <td>
                    <b-form-input
                      type="text"
                      id="inline-form-input-name"
                      class="mb-2 mr-sm-2 mb-sm-0 input-kode"
                      placeholder="K-02"
                    />
                  </td>
                  <td>
                    <strong
                      ><b-form-input
                        type="text"
                        id="inline-form-input-name"
                        class="mb-2 mr-sm-2 mb-sm-0 input-nama"
                        placeholder="Nama ice cream"
                    /></strong>
                  </td>
                  <td>
                    <b-form-input
                      type="text"
                      id="inline-form-input-name"
                      class="mb-2 mr-sm-2 mb-sm-0 input-harga"
                      placeholder="2000"
                    />
                  </td>
                  <td>
                    <select
                      class="form-select input-ready"
                      aria-label="Default select example"
                    >
                      <option disabled>Ready/Kosong</option>
                      <option value="1">Ready</option>
                      <option value="2">Kosong</option>
                    </select>
                  </td>
                  <td>
                    <div class="mb-3">
                      <input class="form-control" type="file" id="formFile" />
                    </div>
                  </td>

                  <td class="text-success">
                    <b-button variant="success" class="mb-2"> submit </b-button>
                  </td>
                </tr>
                <tr>
                  <th>
                    <b-form-input
                      type="number"
                      id="inline-form-input-name"
                      class="mb-2 mr-sm-2 mb-sm-0 input-number"
                      placeholder="3"
                    />
                  </th>
                  <td>
                    <b-form-input
                      type="text"
                      id="inline-form-input-name"
                      class="mb-2 mr-sm-2 mb-sm-0 input-kode"
                      placeholder="K-03"
                    />
                  </td>
                  <td>
                    <strong
                      ><b-form-input
                        type="text"
                        id="inline-form-input-name"
                        class="mb-2 mr-sm-2 mb-sm-0 input-nama"
                        placeholder="Nama ice cream"
                    /></strong>
                  </td>
                  <td>
                    <b-form-input
                      type="text"
                      id="inline-form-input-name"
                      class="mb-2 mr-sm-2 mb-sm-0 input-harga"
                      placeholder="3000"
                    />
                  </td>
                  <td>
                    <select
                      class="form-select input-ready"
                      aria-label="Default select example"
                    >
                      <option disabled>Ready/Kosong</option>
                      <option value="1">Ready</option>
                      <option value="2">Kosong</option>
                    </select>
                  </td>
                  <td>
                    <div class="mb-3">
                      <input class="form-control" type="file" id="formFile" />
                    </div>
                  </td>

                  <td class="text-success">
                    <b-button variant="success" class="mb-2"> submit </b-button>
                  </td>
                </tr>
                <tr class="table-akhir">
                  <th>
                    <b-form-input
                      type="number"
                      id="inline-form-input-name"
                      class="mb-2 mr-sm-2 mb-sm-0 input-number"
                      placeholder="4"
                    />
                  </th>
                  <td>
                    <b-form-input
                      type="text"
                      id="inline-form-input-name"
                      class="mb-2 mr-sm-2 mb-sm-0 input-kode"
                      placeholder="K-04"
                    />
                  </td>
                  <td>
                    <strong
                      ><b-form-input
                        type="text"
                        id="inline-form-input-name"
                        class="mb-2 mr-sm-2 mb-sm-0 input-nama"
                        placeholder="Nama ice cream"
                    /></strong>
                  </td>
                  <td>
                    <b-form-input
                      type="text"
                      id="inline-form-input-name"
                      class="mb-2 mr-sm-2 mb-sm-0 input-harga"
                      placeholder="4000"
                    />
                  </td>
                  <td>
                    <select
                      class="form-select input-ready"
                      aria-label="Default select example"
                    >
                      <option disabled>Ready/Kosong</option>
                      <option value="1">Ready</option>
                      <option value="2">Kosong</option>
                    </select>
                  </td>
                  <td>
                    <div class="mb-3">
                      <input class="form-control" type="file" id="formFile" />
                    </div>
                  </td>

                  <td class="text-success">
                    <b-button variant="success" class="mb-2"> submit </b-button>
                  </td>
                </tr>
                <tr>
                  <th>
                    <b-form-input
                      type="number"
                      id="inline-form-input-name"
                      class="mb-2 mr-sm-2 mb-sm-0 input-number"
                      placeholder="4"
                    />
                  </th>
                  <td>
                    <b-form-input
                      type="text"
                      id="inline-form-input-name"
                      class="mb-2 mr-sm-2 mb-sm-0 input-kode"
                      placeholder="K-04"
                    />
                  </td>
                  <td>
                    <strong
                      ><b-form-input
                        type="text"
                        id="inline-form-input-name"
                        class="mb-2 mr-sm-2 mb-sm-0 input-nama"
                        placeholder="Nama ice cream"
                    /></strong>
                  </td>
                  <td>
                    <b-form-input
                      type="text"
                      id="inline-form-input-name"
                      class="mb-2 mr-sm-2 mb-sm-0 input-harga"
                      placeholder="4000"
                    />
                  </td>
                  <td>
                    <select
                      class="form-select input-ready"
                      aria-label="Default select example"
                    >
                      <option disabled>Ready/Kosong</option>
                      <option value="1">Ready</option>
                      <option value="2">Kosong</option>
                    </select>
                  </td>
                  <td>
                    <div class="mb-3">
                      <input class="form-control" type="file" id="formFile" />
                    </div>
                  </td>

                  <td class="text-success">
                    <b-button variant="success" class="mb-1"> submit </b-button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarView from '@/components/NavbarView.vue';
export default {
  name: 'AdminDetail',
  components: { NavbarView },
};
</script>

<style scoped>
.input-number {
  max-width: 6rem;
}

.input-kode {
  max-width: 6rem;
}
.input-nama {
  max-width: 15rem;
}

.input-harga {
  max-width: 10rem;
}

.input-ready {
  max-width: 12;
}
</style>
