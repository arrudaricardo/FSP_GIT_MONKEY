# == Schema Information
#
# Table name: repositories
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  owner_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :string
#

require 'test_helper'

class RepositoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
